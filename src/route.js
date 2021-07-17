const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const roomController = require ('./controllers/roomController')

const route = express.Router()

route.get ('/', (req, res) => res.render("index"))

route.get ('/room/:room', roomController.open)

route.get ('/create-pass', (req, res) => res.render("create-pass"))
route.post('/room', roomController.create)
route.post('/enterroom', roomController.enter)

route.post('/question/create/:room', QuestionController.create) 
route.post('/question/:room/:question/:action', QuestionController.index)


module.exports = route