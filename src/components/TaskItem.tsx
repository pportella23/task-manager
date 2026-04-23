import { useState, type DragEventHandler, type ReactElement } from "react";
import type { Task, TaskStatus } from "../types/task";

export default function TaskItem({
  task,
  onDelete,
  onStatusChange,
  onDragStart,
  onDrop,
}: {
  task: Task;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
  onDragStart: DragEventHandler<HTMLLIElement>;
  onDrop: DragEventHandler<HTMLLIElement>;
}): ReactElement {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  return (
    <li
      draggable
      onDragOver={(e) => e.preventDefault()}
      onDragStart={(e) => {
        setIsDragging(true);
        onDragStart(e);
      }}
      onDragEnd={() => setIsDragging(false)}
      onDrop={onDrop}
      className="task-item"
      style={{
        cursor: isDragging ? "grabbing" : undefined,
      }}
    >
      <div className="task-item-title">
        <span
          style={{
            textDecoration: task.status === "done" ? "line-through" : undefined,
          }}
        >
          {task.title}
        </span>
      </div>
      <div className="task-item-options">
        <select value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  )
}