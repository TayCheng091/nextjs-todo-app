import dbConnect from "@/lib/dbConnect";

import TodoItem from "@/lib/dbModels/TodoItem";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const { title, content, priority, dueDate } = body;

    if (!title || !priority || !dueDate) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await TodoItem.create({
      title,
      content,
      priority,
      dueDate,
    });

    const allTodos = await TodoItem.find();

    return NextResponse.json({ data: allTodos }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something wrong when creating to-do item" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    console.log("body = ", body);
    const { id } = body;

    await TodoItem.findByIdAndDelete(id);

    const allTodos = await TodoItem.find();

    return NextResponse.json(
      {
        data: {
          todos: allTodos,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something wrong when delete to-do item" },
      { status: 500 }
    );
  }
}
