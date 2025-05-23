import { Collection } from "@/lib/model/user";
import { connectToDB } from "@/lib/db";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory store for demo purposes (consider Redis for production)
const otpStore = new Map();

export async function POST(request) {
  try {
    await connectToDB();
    const { userid, password } = await request.json();

    if (!userid || !password) {
      return NextResponse.json({ result: false, message: "Please fill all the fields" }, { status: 400 });
    }

    const user = await Collection.findOne({ userid });

    if (!user || user.password !== password) {
      return NextResponse.json({ result: false, message: "Invalid userid or password" }, { status: 401 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP temporarily
    otpStore.set(userid, otp);

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: userid,
      subject: "Your OTP for Login",
      text: `Your OTP is: ${otp}`,
    });

    return NextResponse.json({ result: true, message: "OTP has been sent to your registered email." });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ result: false, message: "Internal Server Error" }, { status: 500 });
  }
}

export { otpStore }; // Export the store to be used in /otp API
