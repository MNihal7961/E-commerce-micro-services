import { Product } from "../../../../domain/entities";
import { product } from "../models/productSchema";

export const listProduct = async (token: string): Promise<Product[] | null> => {
    try {
        const products: Product[] = await product.find();

        return products;

    } catch (error: any) {
        throw new Error(`Failed to Fetch Product 😓: ${error?.message} `)
    }
}