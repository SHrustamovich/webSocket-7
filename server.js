const express = require('express')
const app = express()

const PORT = process.env.PORT || 9000
app.use(express.static('public'))

const socketIO = require('socket.io')
const server = app.listen(PORT,console.log('create server!!!'))

const io = socketIO(server)

io.on('connection', socket => {
    socket.on('new-user',name => {
        socket.broadcast.emit('joined-user',{name})
    })
    socket.on('new-message',({name,message}) =>{
        socket.broadcast.emit('new-user-message',{name,message})
    })
})