import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: String,
    password: {
      type: String,
      required: true,
    },
    orderHistory: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
      default: [],
    },
    favorites: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
    query: String,
    access: {
      type: String,
      enum: ["user", "admin"], // You can extend this based on your specific roles
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
