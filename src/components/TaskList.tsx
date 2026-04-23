import { useRef, type DragEventHandler, type ReactElement } from "react";
import type { Task, TaskStatus } from "../types/task";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onDelete,
  onStatusChange,
  onReorder,
}: {
  tasks: Task[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
  onReorder: (dragId: string, dropId: string) => void;
}): ReactElement {
  const dragIdRef = useRef<string | null>(null);

  const createDragStartHandler = (dragId: string): DragEventHandler<HTMLLIElement> => {
    return () => {
      dragIdRef.current = dragId;
    };
  };

  const createDropHandler = (dropId: string): DragEventHandler<HTMLLIElement> => {
    return (e) => {
      e.preventDefault();
      const dragId = dragIdRef.current;
      if (dragId === null || dragId === dropId) {
        return;
      }
      onReorder(dragId, dropId);
      dragIdRef.current = null;
    };
  };

  return tasks.length === 0 ? (
    <p className="task-list">No list items.</p>
  ) : (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
          onDragStart={createDragStartHandler(task.id)}
          onDrop={createDropHandler(task.id)}
        />
      ))}
    </ul>
  )
}