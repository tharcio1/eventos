const express = require ("express")
const cors = require ("cors")
const db = require ("./database")
const userRouter = require("./routes/userRouter")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())

app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error: '))


app.get('/', (req, res) => {
  res.send("SERVER OK")
})

app.use('/api', userRouter)

app.listen(3000, () => console.log("Server running OKOK"))