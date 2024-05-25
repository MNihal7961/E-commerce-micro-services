import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from "cookie-parser";

const app: Application = express()
const PORT: number = Number(process.env.PORT) || 9004

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    const errorResponse = {
        errors: [{ message: `${err?.message} 😓` || "Something went wrong ❌" }],
    };
    return res.status(500).json(errorResponse);
});

app.listen(PORT, () => {
    console.log("Cart Service Running ✅")
    console.log(`http://localhost:${PORT}`)
});

export default app;