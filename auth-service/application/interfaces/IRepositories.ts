import { UserEntity } from "../../domain/entities";

export interface IRepositories {
    signup: (data: UserEntity) => Promise<UserEntity | null>;
    findByEmail: (email: string) => Promise<UserEntity | null>;
}