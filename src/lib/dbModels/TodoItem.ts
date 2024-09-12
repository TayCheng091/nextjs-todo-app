import mongoose, { Document, Schema } from "mongoose";
import { ITaskPriority, ITaskStatus } from "../commonModels/models";

interface ITodoItem extends Document {
  title: string;
  content?: string;
  priority: ITaskPriority;
  dueDate: Date;
  status: ITaskStatus;
}

const TodoItemSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  priority: { type: String, required: true, enum: ITaskPriority },
  dueDate: { type: Date, required: true },
  status: {
    type: String,
    required: true,
    enum: ITaskStatus,
    default: ITaskStatus.TODO,
  },
});

const TodoItem =
  mongoose.models.TodoItem ||
  mongoose.model<ITodoItem>("TodoItem", TodoItemSchema);

export default TodoItem;
