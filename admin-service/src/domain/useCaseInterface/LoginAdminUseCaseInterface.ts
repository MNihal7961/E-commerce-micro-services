import {User,UserData} from "../entities"


export interface AddUserUseCase{
    execute(userData: UserData): Promise<User | null >;
}