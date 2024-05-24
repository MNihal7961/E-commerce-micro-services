import { User } from "../models/user";
import { UserEntity, UserLoginEntity } from "../../../../domain/entities";
import bcrypt from 'bcryptjs'

export const login = async (data: UserLoginEntity): Promise<UserEntity | null> => {
    try {
        const user: UserEntity | null = await User.findOne({ email: data.email })
        if (user) {
            const isMatch: boolean = await bcrypt.compare(data.password, user.password)
            if (!isMatch) {
                throw new Error(`Password is incorrect ❌`)
            } else {
                return user as UserEntity
            }
        } else {
            throw new Error(`User not found with ${data.email} ❌`)
        }
    } catch (error: any) {
        throw new Error(error?.message)
    }
}