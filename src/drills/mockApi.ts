export type TaskStatus = 'todo' | 'in-progress' | 'done';
export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  tags: string[];
}

export function filterTodoTasks(tasks: Task[]): Task[] {
  const todoTasks = tasks.filter((task) => task.status === "todo")
  return todoTasks;
}