import type { TaskStatus } from "../types/task";

export default function TaskFilter({ selectedFilter, onSelectFilter }: { selectedFilter: TaskStatus | 'all', onSelectFilter: (filter: TaskStatus | 'all') => void }) {
  return (
    <div className="task-filter">
      <button onClick={() => onSelectFilter('all')} className={selectedFilter === 'all' ? 'filter-active' : undefined}>All</button>
      <button onClick={() => onSelectFilter('todo')} className={selectedFilter === 'todo' ? 'filter-active' : undefined}>Todo</button>
      <button onClick={() => onSelectFilter('in-progress')} className={selectedFilter === 'in-progress' ? 'filter-active' : undefined}>In Progress</button>
      <button onClick={() => onSelectFilter('done')} className={selectedFilter === 'done' ? 'filter-active' : undefined}>Done</button>
    </div>
  )
}