import { useEffect, useReducer, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import './App.css'

import type { Task, CreateTask, TaskStatus } from "./types/task";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { reducer } from "./reducers/taskReducer";

function App() {
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>('tasks', []);
  const [tasks, dispatch] = useReducer(reducer, storedTasks);
  const [filter, setFilter] = useState<TaskStatus | 'all'>('all')

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks])

  const addTask = (input: CreateTask) => {
    const payload: Task = { ...input, id: Date.now().toString(), status: 'todo', createdAt: Date.now() }
    dispatch({ type: 'ADD_TASK', payload })
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', id })
  };

  const updateTaskStatus = (id: string, status: TaskStatus) => {
    dispatch({ type: 'UPDATE_STATUS', id, status })
  }

  const reorderTask = (dragId: string, dropId: string): void => {
    dispatch({ type: 'REORDER_TASK', dragId, dropId });
  };

  const filteredTasks = tasks.filter((task) => filter === 'all' || task.status === filter)

  return (
    <>
      <header>
        <TaskForm onAdd={addTask} />
        <TaskFilter selectedFilter={filter} onSelectFilter={setFilter} />
      </header>
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onStatusChange={updateTaskStatus} onReorder={reorderTask} />
    </>
  )
}

export default App
