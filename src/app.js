import botConfig from './bot-config'
import eventHandler from './event-handler'
import express from 'express'
import {
  extendApp
} from 'ringcentral-chatbot-core'

const {
  SERVER_PORT,
  SERVER_HOST
} = process.env

let app = express()
const skills = []
app = extendApp(app, skills, eventHandler, botConfig)
app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`bot server running on ${SERVER_HOST}:${SERVER_PORT}`)
})
