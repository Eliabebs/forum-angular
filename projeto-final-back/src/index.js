const express = require('express')
const cors = require('cors')
const indexRouter = require('./routers/index.router')
const questionsRouter = require('./routers/questions.router')
const answersRouter = require('./routers/answers.router')
const app = express()

//database connection
require('./database/connection')
require('./database/models/questions.model')
require('./database/models/answers.model')

// config
app.use(express.json())
app.use(cors())

//routers
app.use(indexRouter)
app.use(questionsRouter)
app.use(answersRouter)

// server
app.listen(3000, () => {
  console.log('Servidor iniciado')
})
