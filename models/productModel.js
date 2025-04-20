import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: Stirng,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      type: data.Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Products", productSchema);
