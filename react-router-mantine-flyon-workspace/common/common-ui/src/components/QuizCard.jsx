import { Icon } from '@iconify-icon/react'

const QuizCard = ({ quiz, onStart }) => {
  const getDifficultyBadge = (difficulty) => {
    const colors = {
      easy: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200 capitalize font-semibold border-0',
      medium: 'bg-amber-100 text-amber-600 hover:bg-amber-200 capitalize font-semibold border-0',
      hard: 'bg-rose-100 text-rose-600 hover:bg-rose-200 capitalize font-semibold border-0'
    }
    return colors[difficulty.toLowerCase()] || 'badge-soft badge-neutral'
  }

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="card-body">
        {/* Header with category and difficulty */}
        <div className="flex justify-between items-start mb-2">
          <div className="badge badge-soft gap-2"
            style={{
              '--bg-color': quiz.category?.color || '#6b7280',
              backgroundColor: `rgb(from var(--bg-color) r g b / 0.16)`,
              color: quiz.category?.color || '#ffffff'
            }}
          >
            <Icon icon={quiz.category?.icon || 'tabler:category'} className="w-4 h-4" />
            {quiz.category?.name || 'General'}
          </div>
          <div className={`badge ${getDifficultyBadge(quiz.difficulty)}`}>
            {quiz.difficulty}
          </div>
        </div>

        {/* Title and description */}
        <h3 className="card-title text-lg mb-2">{quiz.title}</h3>
        <p className="text-sm text-base-content/70 mb-4 line-clamp-2">
          {quiz.description || 'No description available'}
        </p>

        {/* Quiz stats */}
        <div className="flex items-center gap-4 text-sm text-base-content/60 mb-4">
          <div className="flex items-center gap-1">
            <Icon icon="tabler:question-mark" className="w-4 h-4" />
            <span>{quiz.numQuestions} questions</span>
          </div>
          {quiz.timeLimit && (
            <div className="flex items-center gap-1">
              <Icon icon="tabler:clock" className="w-4 h-4" />
              <span>{quiz.timeLimit} min</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Icon icon="tabler:users" className="w-4 h-4" />
            <span>{quiz._count?.attempts || 0} attempts</span>
          </div>
        </div>

        {/* Average score if available */}
        {quiz.avgScore && (
          <div className="flex items-center gap-2 mb-4">
            <Icon icon="tabler:star" className="w-4 h-4 text-warning" />
            <span className="text-sm">
              Avg. Score: <span className="font-semibold">{Math.round(quiz.avgScore)}%</span>
            </span>
          </div>
        )}

        {/* Action button */}
        <div className="card-actions justify-end">
          <button
            className="btn btn-filled btn-primary btn-sm flex"
            onClick={() => onStart(quiz)}
          >
            <Icon icon="tabler:player-play-filled" className="w-4 h-4 mt-1" />
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export { QuizCard }
export default QuizCard