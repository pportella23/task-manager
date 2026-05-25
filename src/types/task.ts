export type TaskStatus = 'todo' | 'in-progress' | 'done';
export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: number;
}
export type CreateTask = Omit<Task, 'id' | 'status' | 'createdAt'>;
export type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; id: string }
  | { type: 'UPDATE_STATUS'; id: string; status: TaskStatus }
  | { type: 'REORDER_TASK'; dragId: string; dropId: string }