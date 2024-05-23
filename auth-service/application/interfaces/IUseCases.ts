import { ISignupUserUseCase,IFindUserByEmailUseCase} from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";


export interface IUseCases {
    signupUserUseCase: (dependencies: IDependencies) => ISignupUserUseCase;
    findUserByEmailUseCase: (dependencies: IDependencies) => IFindUserByEmailUseCase;
}