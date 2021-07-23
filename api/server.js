const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const authRouter = require('./auth/auth-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/auth', authRouter)

server.get("/",(req, res) =>{
    res.json({yodaSays:"Server up it is"})
})
module.exports = server;