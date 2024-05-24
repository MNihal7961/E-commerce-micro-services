import { AdminEntity, AdminLogin } from "../../domain/entities";
import { User, UserData } from "../../domain/entities";

export interface IRepositories {
    login: (data: AdminLogin) => Promise<AdminEntity | null>
    addUser: (data: UserData) => Promise<User | null>
}