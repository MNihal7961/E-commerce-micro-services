import express, { Request, Response, NextFunction, Application } from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { adminRoutes } from '../infrastructure/routes/adminroutes'
dotenv.config()
import { dependencies } from '../config/dependencies'

const app: Application = express()
const PORT: number = Number(process.env.PORT) | 9002

app.use(express.json())
app.use(cookieParser())

app.use('/', adminRoutes(dependencies))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const errorResponse = {
        errors: [{ message: err.message }]
    }
    return res.status(500).json(errorResponse)
})

app.listen(PORT, () => {
    console.log("Admin Service Running ✅")
    console.log(`http://localhost:${PORT}`)
})