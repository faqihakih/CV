const express = require('express')
const serveStatic = require('serve-static')
const patch = require('patch')

const app = express()

app.use('/', serveStatic(patch.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)