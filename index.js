const express = require("express");
const mongoose = require("mongoose")
const apiRouter = require("./routes/api")
const defaultRouter = require("./routes/default")
const app = express()
const PORT = 5000

// connect to database
mongoose.connect("mongodb://root:root@localhost:27017/admin")

//express configs
app.use(express.json())
app.use("/api", apiRouter)
app.use("/", defaultRouter)


app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`) })