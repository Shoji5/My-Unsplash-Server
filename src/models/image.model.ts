import mongoose, { model } from "mongoose";

const imageSchema = new mongoose.Schema({
  label: { type: String, required: true },
  url: { type: String, required: true },
  password: "string",
});

const Image = model("Images", imageSchema);

export default Image;
