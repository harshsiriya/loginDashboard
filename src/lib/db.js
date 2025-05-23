import mongoose from "mongoose";

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const connectionString = `mongodb+srv://${username}:${password}@logindashboard.havincg.mongodb.net/user?retryWrites=true&w=majority&appName=logindashboard`;

let isConnected = false;

export async function connectToDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
