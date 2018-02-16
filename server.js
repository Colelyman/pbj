var express = require('express')
var path = require('path')
var serverStatic = require('serve-static')

app = express()
app.use(serveStatic(__dirname + '/dist'))

var port = process.env.PORT || 3000
app.list(port)

console.log('server started ' + port)
