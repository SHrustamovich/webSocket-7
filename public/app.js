
const socket = io('http://localhost:9000')
const name = prompt('Ismingizni kiriting')

socket.emit('new-user',{name})
const h4 = document.createElement('h4')
h4.innerHTML +='you joined'
body.appendChild(h4)

socket.on('joined-user',({name:{name:userName}}) => {
    const h4 = document.createElement('h4')
    h4.innerHTML += `${userName} joined`
    body.appendChild(h4)
})

form.addEventListener('submit',e => {
    e.preventDefault()
    const h4 = document.createElement('h4')
    h4.innerHTML += `You:${input.value}`
    body.appendChild(h4)
    socket.emit('new-message',{name,message:input.value})
})

socket.on('new-user-message',({name,message}) => {
    const h4 = document.createElement('h4')
    h4.innerHTML += `${name}:${message}`
    body.appendChild(h4)
})