import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default:"user" },
    cartData: { type: Object, default: {} },
  },
  { minimize: false } // Yeh bohot mast catch hai! 🏆
);

// Yahan mongoose.model.user ki jagah mongoose.models.user kar diya gaya hai
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;