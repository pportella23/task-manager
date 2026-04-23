## What I built

A task manager web app built with React, TypeScript, and Vite — no libraries beyond the base setup. Users can add tasks by title, delete them, change their status, and drag to reorder the list. Tasks are filtered by status (Todo, In Progress, Done) and persisted in localStorage across page refreshes. Completed tasks are shown with a strikethrough.

## Decisions I made and why

- **Lazy initializer instead of `useEffect` to read from localStorage.** `localStorage.getItem` is synchronous, so there's no reason to defer it. Using `useState(readStoredTasks)` reads the stored data before the first render, avoiding a flash of empty state and an unnecessary re-render that the `useEffect([], ...)` pattern causes.

- **`useRef` instead of `useState` for the drag ID in `TaskList`.** The dragging item's ID only needs to be available when the drop event fires — it doesn't need to trigger a re-render. `useRef` is the right tool when you need to persist a value across renders without causing one.

- **`filteredTasks` is derived inline, never stored in state.** Storing it in state would create two sources of truth — the task array and the filtered copy — that need to be kept in sync. Deriving it inline on every render means it's always correct by definition: `tasks.filter(task => filter === 'all' || task.status === filter)`.

- **`reorderTask` lives in `App.tsx`, not `TaskList`.** `setTasks` lives in `App`, so any function that needs to update the task array must live there too. `TaskList` receives `onReorder` as a prop and calls it with the drag and drop IDs — it doesn't need to know how the array is mutated.

## What I'd change

I'd add a checkbox at the start of each task item as a quicker way to mark it as done, and dim the title text (light gray) for completed tasks to make the visual distinction stronger. I'd also reconsider using `Date.now()` as the task ID — it's fine for a single user in a browser, but a proper UUID would be more correct. Subtasks would be a natural next feature, though it would require rethinking the data model.

