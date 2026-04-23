import { useState, type FormEvent, type ReactElement } from "react";

import type { CreateTask } from "../types/task";

export default function TaskForm({
  onAdd,
}: {
  onAdd: (input: CreateTask) => void;
}): ReactElement {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      onAdd({ title: trimmedTitle });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label>
        Task Title{' '}
        <input
          type="text"
          value={title}
          placeholder="type task title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  )
}