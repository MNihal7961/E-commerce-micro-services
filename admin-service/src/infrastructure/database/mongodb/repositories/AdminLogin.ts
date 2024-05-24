import { AdminLogin, AdminEntity } from "../../../../domain/entities";
import { Admin } from "../models/adminSchema";
import bcrypt from 'bcryptjs'

export const login = async (data: AdminLogin): Promise<AdminEntity | null> => {
    try {
        if (!data.email || !data.password) {
            throw new Error("Email and password are required");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            throw new Error("Invalid email format");
        }

        if (data.password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }

        const admin: AdminEntity | null = await Admin.findOne({ email: data.email })
        if (admin) {
            const passwordMatch: boolean = await bcrypt.compare(data.password, admin.password)
            if (!passwordMatch) {
                throw new Error(`Incorrect password ❌`)
            } else {
                return admin as AdminEntity
            }
        } else {
            throw new Error(`Admin not fount with ${data.email} ❌`)
        }
    } catch (error: any) {
        throw new Error(error?.message)
    }
}