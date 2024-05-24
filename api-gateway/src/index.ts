import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import proxy from 'express-http-proxy'


const app = express()
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
app.use(cookieParser())

const authProxy = "http://localhost:8001/"
const adminProxy = "http://localhost:8002/"

app.use('/auth', proxy(authProxy))
app.use('/admin', proxy(adminProxy))

app.listen(PORT, () => {
    console.log("API Gateway Running ✅ ")
    console.log(`http://localhost:${PORT}`)
})