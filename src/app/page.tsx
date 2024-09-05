"use client";

import Button from "@/components/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import Modal from "react-modal";

interface TodoFormData {
  title: string;
  content: string;
  priority: TaskPriority;
  dueDate: string;
}

enum TaskPriority {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
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
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState<TodoFormData>({
    title: "",
    content: "",
    priority: TaskPriority.MEDIUM,
    dueDate: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    // TODO: Call api to create new todo item
    // onSubmit(formData);
    // 清空表單
    clearFormData();
  };

  function clearFormData(): void {
    setFormData({
      title: "",
      content: "",
      priority: TaskPriority.MEDIUM,
      dueDate: "",
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeAddItemModal}
        style={addTodoFormStyles}
        contentLabel="Example Modal"
      >
        <div className="grid gap-y-5">
          <div className="flex justify-between items-center pb-3 border-b border-border-color">
            <h2 className="text-xl font-bold">Create Todo Item</h2>
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
                  Todo Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2"
                  placeholder="your todo title"
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
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-3 py-2"
                >
                  {Object.entries(TaskPriority).map(([key, value]) => {
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
                  value={formData.dueDate}
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
                  Todo Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full px-3 py-2 "
                  placeholder="describe your todo content"
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
