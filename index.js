const express = require('express')
const app = express()
var cors = require("cors");

let notes = [
  {
    time: "4/27/23 20:05",
    bin: "GitHub Capstone Repo",
    method: "GET",
    status: "200 OK",
    body: "hello world"
  },
  {
    time: "5/19/23 20:05",
    bin: "GitHub Basecamp",
    method: "POST",
    status: "200 OK",
    body: "hello mars"
  }
]

app.use(cors());

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

