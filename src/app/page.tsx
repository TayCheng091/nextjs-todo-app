"use client";

import Button from "@/components/Button";
import TodoCard from "@/components/TodoCard";
import { ITaskPriority, ITodo } from "@/lib/commonModels/models";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";

interface ITodoFormData {
  title: string;
  content: string;
  priority: ITaskPriority;
  dueDate: string;
}

const addTodoFormStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "600px",
    width: "100%",
  },
};

Modal.setAppElement("body");

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch("/api/todos");
      const res = await response.json();
      setTodos(res.data);
    }

    fetchTodos();
  }, []);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const today = new Date().toISOString().split("T")[0];
  const [todoFormData, setTodoFormData] = useState<ITodoFormData>({
    title: "",
    content: "",
    priority: ITaskPriority.MEDIUM,
    dueDate: today,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setTodoFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    // Call api to create new todo item
    fetch("/api/todo", { method: "POST", body: JSON.stringify(todoFormData) })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.data);
      });

    // close form modal
    closeAddItemModal();
  };

  function clearFormData(): void {
    setTodoFormData({
      title: "",
      content: "",
      priority: ITaskPriority.MEDIUM,
      dueDate: today,
    });
  }

  function closeAddItemModal(): void {
    clearFormData();
    setIsOpen(false);
  }

  function openAddItemModal(): void {
    setIsOpen(true);
  }

  return (
    <div>
      <Button style="primary" onClick={openAddItemModal}>
        Add
      </Button>
      <div className="grid grid-cols-3 gap-3 laptop:grid-cols-2 mobile:grid-cols-1">
        {todos.map((todo) => {
          return <TodoCard key={todo._id} todo={todo} setTodos={setTodos} />;
        })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeAddItemModal}
        style={addTodoFormStyles}
        contentLabel="Example Modal"
      >
        <div className="grid gap-y-5">
          <div className="flex justify-between items-center pb-3 border-b border-border-color">
            <h2 className="text-xl font-bold">Create To-do Item</h2>
            <button onClick={closeAddItemModal}>close</button>
          </div>
          <div>
            <form
              className="grid gap-y-4 max-w-md mx-auto bg-white "
              onSubmit={handleSubmit}
            >
              <div className="flex items-center gap-x-1.5">
                <label
                  className="block min-w-20 text-gray-700 font-semibold text-nowrap"
                  htmlFor="title"
                >
                  To-do Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={todoFormData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2"
                  placeholder="your to-do title"
                  required
                />
              </div>
              <div className="flex items-center gap-x-1.5">
                <label
                  className="block min-w-20 text-gray-700 font-semibold text-nowrap"
                  htmlFor="priority"
                >
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={todoFormData.priority}
                  onChange={handleChange}
                  className="w-full px-3 py-2"
                >
                  {Object.entries(ITaskPriority).map(([key, value]) => {
                    return (
                      <option value={value} key={key}>
                        {value}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex items-center gap-x-1.5">
                <label
                  className="block min-w-20 text-gray-700 font-semibold text-nowrap"
                  htmlFor="dueDate"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={todoFormData.dueDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 "
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2 text-nowrap"
                  htmlFor="content"
                >
                  To-do Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={todoFormData.content}
                  onChange={handleChange}
                  className="w-full px-3 py-2 "
                  placeholder="describe your to-do content"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-x-3">
                <Button type="button" onClick={closeAddItemModal}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  style="primary"
                  customStyle="w-full font-semibold"
                >
                  Create
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
