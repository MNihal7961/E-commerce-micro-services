import { AdminLogin, AdminEntity } from "../entities";

export interface loginAdminUseCase {
    execute(credentials: AdminLogin): Promise<AdminEntity | null>
}