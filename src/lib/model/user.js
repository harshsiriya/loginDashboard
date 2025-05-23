import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userid: { type: String, required: true },
  password: { type: String, required: true },
});


export const Collection = mongoose.models.Collection || mongoose.model("Collection", userSchema);
