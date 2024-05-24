import { User, UserData } from "../entities";

export interface AdminUSerUseCase {
    execute(userData: UserData): Promise<User | null>
}