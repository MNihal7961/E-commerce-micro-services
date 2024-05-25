import { Types } from "mongoose";
import { insertProduct } from "../../database/mongodb/repositories/addProductRepo"

export default async (data: {
    _id?: Types.ObjectId;
    name: string;
    description: string;
    price: number;
    stock: number;
}) => {
    try {
        console.log("🚀 Product Consumer :", data)
        await insertProduct(data)
    } catch (error: any) {
        throw new Error(error?.message)
    }
}