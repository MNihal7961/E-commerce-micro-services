import { UserEntity, UserLoginEntity } from "../entities";

export interface ILoginUserUseCase {
    execute(data: UserLoginEntity): Promise<UserEntity | null>
}