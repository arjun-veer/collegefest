import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'


dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

connectDB()

app.get("/", (req, resp) => {
    resp.send("API Working Fine")
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})