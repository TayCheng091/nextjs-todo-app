// pages/api/todos.ts
import dbConnect from "@/lib/dbConnect";

import TodoItem from "@/lib/dbModels/TodoItem";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const dbClient = await client;
    // const db = dbClient.db("todolist");

    await dbConnect();

    // const todos = await db.collection("todos").find().toArray();
    const allTodos = await TodoItem.find();
    return NextResponse.json({ data: allTodos }, { status: 200 });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { message: "Error connecting to database" },
      { status: 500 }
    );
  }
}
