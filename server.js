import "dotenv/config.js"
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as usersRouter } from './routes/skills.js'
import { router as skillsRouter } from './routes/skills.js'
import './config/database.js'

// set up app
const app = express()

import { Router } from 'express'
// import the Todo data
import { skills } from '../data/skills-data.js'

const router = Router()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

// mounted routers
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/skills', skillsRouter)

app.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export {
  app
}
