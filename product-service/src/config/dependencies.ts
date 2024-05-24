import * as repositories from "../infrastrucure/database/mongodb/repositories"
import * as useCases from "../application/useCases"
import { IDependencies } from "../application/interfaces/IDependencies"

export const dependencies : IDependencies ={
    useCases,
    repositories
}