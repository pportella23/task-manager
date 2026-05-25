import type { Task, TaskAction } from "../types/task";

export function reducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id)
    case 'UPDATE_STATUS': {
      const { id, status } = action;
      return state.map((task) => task.id === id ? { ...task, status } : task)
    }
    case 'REORDER_TASK': {
      const { dragId, dropId } = action;

      const dragIndex = state.findIndex(
        (task) => task.id === dragId,
      );

      const dropIndex = state.findIndex(
        (task) => task.id === dropId,
      );

      if (
        dragIndex < 0 ||
        dropIndex < 0 ||
        dragIndex === dropIndex
      ) {
        return state;
      }

      const nextTasks = [...state];
      const dragTask = nextTasks[dragIndex];

      if (!dragTask) {
        return state;
      }

      nextTasks.splice(dragIndex, 1);
      nextTasks.splice(dropIndex, 0, dragTask);

      return nextTasks;
    }
  }
}