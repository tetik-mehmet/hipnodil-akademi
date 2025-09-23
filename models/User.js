import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    birthDate: { type: Date },
    tcNumber: { type: String, trim: true },
    phone: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    education: { type: String },
    password: { type: String, required: true, select: false },
    // Kullanıcının erişebildiği eğitim/paket slug listesi
    courses: {
      type: [String],
      default: [],
      enum: ["mentorluk_kursu", "seviye6_kursu"],
    },
    // Şifre yenileme için yeni alanlar
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
