import express, { Application, NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import { authRoutes } from '../infrastructure/routers/authRoute'
import { dependencies } from '../config/dependencies'

const app: Application = express()
const PORT: number = Number(process.env.PORT) || 9001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/', authRoutes(dependencies))

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error.message)

    const errorResponse = {
        errors: [{
            message: error?.message || "Something went wrong ❌"
        }]
    }

    return res
        .status(500)
        .json(errorResponse)
})

app.listen(PORT, () => {
    console.log("Auth Service Running ✅")
    console.log(`http://localhost:${PORT}`)
})

export default app