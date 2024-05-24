import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { User } from "../../domain/entities";

export const addUserController = (dependencies: IDependencies) => {
    const { useCases: { addUserUseCase } } = dependencies

    if (!addUserUseCase) {
        throw new Error("addUserUseCase is not defined in dependencies");
    }

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: User = req.body

            const addedUser: User | null = await addUserUseCase(dependencies).execute(userData)

            res.status(201).json(addedUser)
        } catch (error: any) {
            next(error)
        }
    }
}