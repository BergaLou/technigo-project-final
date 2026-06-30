import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import swearRoutes from './routes/swearRoutes.js'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

app.use("/swears", swearRoutes)

app.get("/", (req, res) => {
  res.send("Hello world!")
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
