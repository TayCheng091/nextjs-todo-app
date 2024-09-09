import mongoose, { Document, Schema } from "mongoose";

interface ITodoItem extends Document {
  title: string;
  content?: string;
  priority: "low" | "medium" | "high";
  dueDate: Date;
}

const TodoItemSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  priority: { type: String, required: true, enum: ["low", "medium", "high"] },
  dueDate: { type: Date, required: true },
});

const TodoItem =
  mongoose.models.TodoItem ||
  mongoose.model<ITodoItem>("TodoItem", TodoItemSchema);

export default TodoItem;
