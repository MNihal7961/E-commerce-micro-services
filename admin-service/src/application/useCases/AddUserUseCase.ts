import { User } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const addUserUseCase = (dependencies: IDependencies) => {
    const { repositories: { addUser } } = dependencies
    return {
        execute: async (data: User) => {
            try {
                return await addUser(data)
            } catch (error: any) {
                throw new Error(error?.message)
            }
        }
    }
}