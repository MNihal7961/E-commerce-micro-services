import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export default async () => {
    try {
        await mongoose.connect(String(process.env.MONGO_URL))
        console.log("productDB 🍃 connected ✅")
    } catch (error: any) {
        console.error(`productDB connection failed 😞`);
        console.error(error.message);
        process.exit(1);
    }
}