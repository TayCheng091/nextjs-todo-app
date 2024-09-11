export enum TaskPriority {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

export interface ITodo {
  title: string;
  content: string;
  priority: TaskPriority;
  dueDate: string;
  _id: string;
}
