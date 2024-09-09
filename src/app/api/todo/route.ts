// pages/api/todos.ts
import dbConnect from "@/lib/dbConnect";

import TodoItem from "@/lib/dbModels/TodoItem";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    console.log(body);
    const { title, content, priority, dueDate } = body;

    if (!title || !priority || !dueDate) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newTodo = await TodoItem.create({
      title,
      content,
      priority,
      dueDate,
    });

    console.log("new todo start");
    console.log(newTodo);
    console.log("new todo end");

    const allTodos = await TodoItem.find();

    return NextResponse.json({ data: allTodos }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something when creating to-do item" },
      { status: 500 }
    );
  }
}
