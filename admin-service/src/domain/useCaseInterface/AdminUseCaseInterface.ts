import { AdminLogin, AdminEntity } from "../entities/index"

export interface loginAdminUseCase {
    execute(credentials: AdminLogin): Promise<AdminEntity | null>;
}