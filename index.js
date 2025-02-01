require('dotenv').config()
const app = require('express')()
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')
const path = require('path')
const router = express.Router()
const PORT = process.env.PORT || 9000
const socket = require('socket.io')

// set api cors
app.use(cors())

// parse application/json
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: false,
    parameterLimit: 10000000
  })
)

app.get('/', function (req, res) {
  res.send('Welcome to Eduction System')
})

const server = app.listen(PORT, 'localhost', function () {
  console.log(`listening on port http://localhost:${PORT}`)
})

// routes
requireRoutes(path.join(__dirname, '/src/routes'))

const io = socket(server, {
  transports: ['polling'],
  cors: { origin: '*' }
})

// Socket.IO
io.on('connection', socket => {
  console.log('a new client connected')
  socket.on('disconnect', () => { })
})

// Reusable function to require routes
function requireRoutes(dir) {
  fs.readdirSync(dir)
    .filter(file => file !== 'index.js' && file.endsWith('.js'))
    .forEach(file => require(path.join(dir, file))(app, router))
}

module.exports = { app, io }
