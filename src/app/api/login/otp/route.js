import { otpStore } from "../route"; // Import from the login file
import jwt from "jsonwebtoken";
import { Collection } from "@/lib/model/user";
import { connectToDB } from "@/lib/db";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function POST(request) {
  try {
    await connectToDB();
    const { userid, otp } = await request.json();

    const storedOtp = otpStore.get(userid);

    if (!storedOtp || storedOtp !== otp) {
      return NextResponse.json({ result: false, message: "Invalid or expired OTP" }, { status: 401 });
    }

    otpStore.delete(userid); 

    const user = await Collection.findOne({ userid });
    const token = jwt.sign(
      { id: user._id, userid: user.userid },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return NextResponse.json({ result: true, message: "Authentication successful", token }, { status: 200 });

  } catch (error) {
    console.error("OTP verification error:", error);
    return NextResponse.json({ result: false, message: "Internal Server Error" }, { status: 500 });
  }
}
