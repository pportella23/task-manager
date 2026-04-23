import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import './App.css'

import type { Task, CreateTask, TaskStatus } from "./types/task";

function readStoredTasks(): Task[] {
  const raw = localStorage.getItem("tasks");
  if (raw === null) {
    return [];
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(parsed)) {
    return [];
  }
  return parsed as Task[];
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(readStoredTasks);
  const [filter, setFilter] = useState<TaskStatus | 'all'>('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (input: CreateTask) => {
    setTasks([...tasks, { ...input, id: Date.now().toString(), status: 'todo', createdAt: Date.now() }]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTaskStatus = (id: string, status: TaskStatus) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, status } : task));
  }

  const reorderTask = (dragId: string, dropId: string): void => {
    setTasks((prev) => {
      const dragIndex = prev.findIndex((task) => task.id === dragId);
      const dropIndex = prev.findIndex((task) => task.id === dropId);
      if (dragIndex < 0 || dropIndex < 0 || dragIndex === dropIndex) {
        return prev;
      }

      const next = [...prev];
      const dragTask = next[dragIndex];
      if (dragTask === undefined) {
        return prev;
      }

      next.splice(dragIndex, 1);
      next.splice(dropIndex, 0, dragTask);

      return next;
    });
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
