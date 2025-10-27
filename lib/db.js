import mongoose from "mongoose";

let isConnected = false; // ✅ global flag

const connectToDB = async () => {
  if (isConnected) {
    console.log("🟢 Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "celtrix", // 👈 Make sure this is correct
    });

    isConnected = true;
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
};

export default connectToDB;
