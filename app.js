const express = require("express")
const path = require("path")

const app = express()

const root = path.join(__dirname)

app.use(express.static(path.join(__dirname)))

app.get("/", (_req, res) => {
  res.status(200).sendFile(root, "index.html")
})

app.listen(5656, () => console.log("Server ON"))