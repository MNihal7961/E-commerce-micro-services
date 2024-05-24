import * as repositories from '../infrastructure/database/mongodb/repositories'
import { IDependencies } from '../application/interfaces/IDependencies'
import * as useCases from '../application/useCases'

export const dependencies:IDependencies={
    repositories,
    useCases
}