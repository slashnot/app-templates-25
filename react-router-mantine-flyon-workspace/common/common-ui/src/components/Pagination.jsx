import { Icon } from '@iconify-icon/react'

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  showInfo = true,
  className = ''
}) => {
  if (totalPages <= 1) return null

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []
    
    for (let i = Math.max(2, currentPage - delta); 
         i <= Math.min(totalPages - 1, currentPage + delta); 
         i++) {
      range.push(i)
    }
    
    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }
    
    rangeWithDots.push(...range)
    
    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }
    
    return rangeWithDots
  }

  const visiblePages = getVisiblePages()

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}>
      {/* Info */}
      {showInfo && (
        <div className="text-sm text-base-content/60">
          Page {currentPage} of {totalPages}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="join">
        {/* Previous Button */}
        <button
          className="join-item btn btn-sm"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <Icon icon="tabler:chevron-left" className="w-4 h-4" />
          Previous
        </button>

        {/* Page Numbers */}
        {visiblePages.map((page, index) => {
          if (page === '...') {
            return (
              <button
                key={`dots-${index}`}
                className="join-item btn btn-sm btn-disabled"
                disabled
              >
                ...
              </button>
            )
          }

          return (
            <button
              key={page}
              className={`join-item btn btn-sm ${
                currentPage === page 
                  ? 'btn-primary' 
                  : 'btn-ghost'
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        })}

        {/* Next Button */}
        <button
          className="join-item btn btn-sm"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
          <Icon icon="tabler:chevron-right" className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Jump */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-base-content/60">Go to page:</span>
        <input
          type="number"
          min="1"
          max={totalPages}
          className="input input-bordered input-sm w-20"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const page = parseInt(e.target.value)
              if (page >= 1 && page <= totalPages) {
                onPageChange(page)
                e.target.value = ''
              }
            }
          }}
          placeholder="#"
        />
      </div>
    </div>
  )
}

export { Pagination }
export default Pagination