const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage lullaby')
    }
    if (req.url === '/about') {
        res.end("About Pafeee")
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Loser</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)