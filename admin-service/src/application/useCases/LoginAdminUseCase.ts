import { AdminLogin } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const adminLoginUseCase = (dependencies: IDependencies) => {
    const { repositories: { login } } = dependencies
    return {
        execute: async (data: AdminLogin) => {
            try {
                return await login(data)
            } catch (error: any) {
                throw new Error(error?.message)
            }
        }
    }
}