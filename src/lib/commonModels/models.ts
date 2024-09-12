export enum ITaskPriority {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

export enum ITaskStatus {
  TODO = "todo",
  "IN_PROCESS" = "in process",
  "DONE" = "done",
}

export interface ITodo {
  title: string;
  content: string;
  priority: ITaskPriority;
  dueDate: string;
  _id: string;
}
