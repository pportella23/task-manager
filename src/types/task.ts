export type TaskStatus = 'todo' | 'in-progress' | 'done';
export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: number;
}
export type CreateTask = Omit<Task, 'id' | 'status' | 'createdAt'>;