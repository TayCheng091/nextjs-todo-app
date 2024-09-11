import { ITodo } from "@/lib/commonModels/models";
import { dateFormat } from "@/lib/utils";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import Tag from "./Tag";

function TodoCard({ todo }: { todo: ITodo }) {
  const { title, priority, content, dueDate } = todo;
  return (
    <div className="grid gap-y-3 p-4 rounded-lg border border-border-color">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <Tag context={priority} />
        </div>
        <Tag context="Status tag" />
      </div>
      <div>{content}</div>
      <div className="flex justify-between items-center">
        <div>Due: {dateFormat(new Date(dueDate))}</div>
        <div className="flex gap-x-2">
          <MdDeleteForever
            size="20px"
            className="cursor-pointer transition-all hover:scale-125 hover:fill-primary"
          />
          <MdModeEdit
            size="20px"
            className="cursor-pointer transition-all hover:scale-125 hover:fill-primary"
          />
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
