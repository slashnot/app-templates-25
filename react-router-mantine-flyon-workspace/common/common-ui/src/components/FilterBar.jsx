import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router'
import { Icon } from '@iconify-icon/react'

const FilterBar = ({ categories = [] }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || 'all',
    difficulty: searchParams.get('difficulty') || 'all'
  })

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (filters.search) params.set('search', filters.search)
    if (filters.category !== 'all') params.set('category', filters.category)
    if (filters.difficulty !== 'all') params.set('difficulty', filters.difficulty)
    
    setSearchParams(params)
  }, [filters, setSearchParams])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      category: 'all',
      difficulty: 'all'
    })
  }

  const hasActiveFilters = filters.search || filters.category !== 'all' || filters.difficulty !== 'all'

  return (
    <div className="bg-base-100 rounded-lg shadow-sm border border-base-300/50 p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search Input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Search</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search quizzes..."
              className="input input-bordered w-full pl-10"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
            <Icon 
              icon="tabler:search" 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/40" 
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Category</span>
          </label>
          <select
            className="select select-bordered"
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name} ({category._count?.quizzes || 0})
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Difficulty</span>
          </label>
          <select
            className="select select-bordered"
            value={filters.difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Actions</span>
          </label>
          {hasActiveFilters ? (
            <button
              className="btn btn-soft btn-sm"
              onClick={clearFilters}
            >
              <Icon icon="tabler:x" className="w-4 h-4 mr-2" />
              Clear Filters
            </button>
          ) : (
            <div className="text-sm text-base-content/60 flex items-center justify-center h-10">
              No active filters
            </div>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-base-300/50">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium">Active filters:</span>
            {filters.search && (
              <div className="badge badge-soft gap-1">
                Search: `{filters.search}`
                <button
                  onClick={() => handleFilterChange('search', '')}
                  className="ml-1 hover:text-error"
                >
                  <Icon icon="tabler:x" className="w-3 h-3" />
                </button>
              </div>
            )}
            {filters.category !== 'all' && (
              <div className="badge badge-soft gap-1">
                Category: {categories.find(c => c.id.toString() === filters.category)?.name || 'Unknown'}
                <button
                  onClick={() => handleFilterChange('category', 'all')}
                  className="ml-1 hover:text-error"
                >
                  <Icon icon="tabler:x" className="w-3 h-3" />
                </button>
              </div>
            )}
            {filters.difficulty !== 'all' && (
              <div className="badge badge-soft gap-1">
                Difficulty: {filters.difficulty}
                <button
                  onClick={() => handleFilterChange('difficulty', 'all')}
                  className="ml-1 hover:text-error"
                >
                  <Icon icon="tabler:x" className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export { FilterBar }
export default FilterBar