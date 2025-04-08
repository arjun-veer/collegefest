import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.get("/", (req, resp) => {
    resp.send("API Working Fine")
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})