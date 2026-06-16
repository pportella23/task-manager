import type { TaskStatus } from "../types/task";

export default function TaskFilter({ searchTask, onSearchTask, selectedFilter, onSelectFilter }: { searchTask: string, onSearchTask: (searchText: string) => void, selectedFilter: TaskStatus | 'all', onSelectFilter: (filter: TaskStatus | 'all') => void }) {

  return (
    <div className="task-search">
      <div className="task-filter">
        <button onClick={() => onSelectFilter('all')} className={selectedFilter === 'all' ? 'filter-active' : undefined}>All</button>
        <button onClick={() => onSelectFilter('todo')} className={selectedFilter === 'todo' ? 'filter-active' : undefined}>Todo</button>
        <button onClick={() => onSelectFilter('in-progress')} className={selectedFilter === 'in-progress' ? 'filter-active' : undefined}>In Progress</button>
        <button onClick={() => onSelectFilter('done')} className={selectedFilter === 'done' ? 'filter-active' : undefined}>Done</button>
      </div>
      <input
        type="text"
        placeholder="type task title to filter..."
        value={searchTask}
        onChange={(e) => onSearchTask(e.target.value)}
      />
    </div>
  )
}