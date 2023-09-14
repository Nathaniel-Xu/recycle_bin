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

function generateRandom() {
  return 
}


app.use(cors());

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/requests', (request, response) => {
  const randomSuffix = Math.floor(Math.random() * 10000)
  let url = `http://localhost:3001/requests/${randomSuffix}`
  response.send(url)
});

app.post('/requests', (request, response) => {
  //Zach method
  //we have the url in express (or we receive and parse it)
  //here we create a SQL row for the first table
  //send back a new url

  //Steve method
  // dont need to send data
  // just start function call for db to create new row
  // response returns bin_path to display on screen
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

