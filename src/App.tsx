import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import './App.css'

import type { Task, CreateTask, TaskStatus } from "./types/task";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { reducer } from "./reducers/taskReducer";
import { useDebounce } from "./hooks/useDebounce";
import { usePrevious } from "./hooks/usePrevious";

function App() {
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>('tasks', []);
  const [tasks, dispatch] = useReducer(reducer, storedTasks);
  const [filter, setFilter] = useState<TaskStatus | 'all'>('all')
  const [searchTask, setSearchTask] = useState('');

  const debouncedSearchTasks = useDebounce(searchTask, 500);

  const previousTaskCount = usePrevious(tasks.length);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks])

  const addTask = useCallback((input: CreateTask) => {
    const payload: Task = { ...input, id: Date.now().toString(), status: 'todo', createdAt: Date.now() }
    dispatch({ type: 'ADD_TASK', payload })
  }, [dispatch])

  const deleteTask = useCallback((id: string) => {
    dispatch({ type: 'DELETE_TASK', id })
  }, [dispatch])

  const updateTaskStatus = useCallback((id: string, status: TaskStatus) => {
    dispatch({ type: 'UPDATE_STATUS', id, status })
  }, [dispatch])

  const reorderTask = useCallback((dragId: string, dropId: string): void => {
    dispatch({ type: 'REORDER_TASK', dragId, dropId });
  }, [dispatch])

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => filter === 'all' || task.status === filter)
  }, [tasks, filter])

  const debouncedSearchedTasks = useMemo(() => {
    if (!debouncedSearchTasks) return filteredTasks;

    return filteredTasks.filter(item =>
      item.title.toLowerCase().includes(debouncedSearchTasks.toLowerCase())
    );
  }, [debouncedSearchTasks, filteredTasks])

  const deletedCount =
    previousTaskCount !== undefined && previousTaskCount > tasks.length
      ? previousTaskCount - tasks.length
      : undefined;

  const addedCount =
    previousTaskCount !== undefined && previousTaskCount < tasks.length
      ? tasks.length - previousTaskCount
      : undefined;

  return (
    <>
      <header>
        <TaskForm onAdd={addTask} />
        <TaskFilter searchTask={searchTask} onSearchTask={setSearchTask} selectedFilter={filter} onSelectFilter={setFilter} />
      </header>
      <TaskList tasks={debouncedSearchedTasks} onDelete={deleteTask} onStatusChange={updateTaskStatus} onReorder={reorderTask} />
      {deletedCount !== undefined && (
        <p>{deletedCount} task{deletedCount === 1 ? '' : 's'} deleted</p>
      )}
      {addedCount !== undefined && (
        <p>{addedCount} task{addedCount === 1 ? '' : 's'} added</p>
      )}
    </>
  )
}

export default App
