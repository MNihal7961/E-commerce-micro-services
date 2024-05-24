import { Product, ProductRequest } from "../../../../domain/entities";
import { product } from "../models/productSchema";

export const addProduct = async (data: ProductRequest): Promise<Product | null> => {
    try {
        const newProduct = new product(data);

        const savedProduct = await newProduct.save();

        return savedProduct as Product;

    } catch (error: any) {
        throw new Error(`Failed to add product 😓 : ${error?.message}`);
    }
};
