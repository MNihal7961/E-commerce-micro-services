import { Schema } from "mongoose";
import { insertUser } from "../../database/mongodb/repositories/userRepo";


export default async (data: {
    _id: Schema.Types.ObjectId,
    username: string;
    email: string;
    password: string;
}) => {
    try {
        console.log("🚀  userConsumer:", data)
        await insertUser(data)
    } catch (error: any) {
        throw new Error(error?.message)
    }
}

