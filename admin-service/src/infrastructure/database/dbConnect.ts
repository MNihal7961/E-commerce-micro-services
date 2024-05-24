import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export default async () => {
    try {
        await mongoose.connect(String(process.env.MONGO_URL))
        console.log("Admin DB 🍃 connected ✅")
    } catch (error: any) {
        console.error(`Error at connectDB ${error.message} ❌`);
        process.exit(1);
    }
}