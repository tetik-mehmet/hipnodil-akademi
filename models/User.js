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
    // Kullanıcı rolü (admin panel erişimi için)
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    // Kullanıcının erişebildiği eğitim/paket slug listesi
    courses: {
      type: [String],
      default: [],
      enum: ["mentorluk_kursu", "seviye6_kursu"],
    },
    // Sınav başvurusu durumu
    examApplication: {
      type: String,
      enum: ["not_specified", "applied", "not_applied"],
      default: "not_specified",
      required: false, // Eski kullanıcılar için
    },
    // Sınav durumu (sadece başvuru yapıldı ise)
    examStatus: {
      type: String,
      enum: ["not_applicable", "entered", "not_entered"],
      default: "not_applicable",
    },
    // Sınav sonucu (sadece sınava girdi ise)
    examResult: {
      type: String,
      enum: ["not_applicable", "successful", "unsuccessful"],
      default: "not_applicable",
    },
    // Şifre yenileme için yeni alanlar
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
