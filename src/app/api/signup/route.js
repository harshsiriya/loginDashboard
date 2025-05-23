import { Collection } from "@/lib/model/user";
import { connectToDB } from "@/lib/db"; 
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDB(); 

    const body = await request.json();
    const { name, userid, password } = body;


    if (!name || !userid || !password) {
      return NextResponse.json(
        { result: false, message: "Please fill all the fields" },
        { status: 401 }
      );
    }

  
    const existingUser = await Collection.findOne({ userid });

    if (existingUser) {
      return NextResponse.json(
        { result: false, message: "User already exists" },
        { status: 401 }
      );
    }

 
    const newUser = new Collection({ name, userid, password });
    await newUser.save();

    return NextResponse.json(
      { result: true, message: "User created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { result: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
