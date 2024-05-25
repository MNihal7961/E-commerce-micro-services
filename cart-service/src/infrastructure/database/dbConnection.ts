import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export default async () => {
    try {
        await mongoose.connect(String(process.env.MONGO_URL))
        console.log("cartDB 🍃 connected ✅")
    } catch (error: Error | any) {
        console.error(`cartDB connection ❌: ${error?.message}`);
        process.exit(1);
    }
}