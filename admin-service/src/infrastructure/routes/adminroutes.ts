import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const adminRoutes = (dependencies: IDependencies) => {
    const { login, addUser } = controllers(dependencies)
    const router = Router()

    router.route('/login').post(login);
    router.route('/adduser').post(addUser);

    return router;
}