const express = require('express')
const socket = require('socket.io')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cryptoRouter = require('./routes/routes')
const mongoose = require('mongoose')
const app = express()


app.use(express.static(`${__dirname}/../client`))
app.use(morgan('tiny'))
app.use('/data', cryptoRouter)

mongoose.connect('mongodb://new123:new123@ds117431.mlab.com:17431/cryptbooks', { useNewUrlParser: true })
	.then(() => {
		app.listen(3000)
	})