import { hash, genSalt } from "bcryptjs";

export const hashPassword = async (password: string) => {
    try {
        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt)

        if (!hashedPassword) {
            throw new Error("Password hasing failed @hashPassword")
        }

        return hashedPassword
    } catch (error: Error | any) {
        throw new Error(error?.message)
    }
}