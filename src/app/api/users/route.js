import { Collection } from "@/lib/model/user";
import { connectToDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB(); // ✅ Ensure MongoDB is connected

    const data = await Collection.find(); // Fetch all users
    console.log("Fetched users:", data);

    return NextResponse.json(
      { result: true, message: "Users fetched successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { result: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
