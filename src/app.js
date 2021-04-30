const path = require('path')

const express = require("express")

const app = express()

const port = 3000

app.set('views', path.join(__dirname, './views'))
app.use(express.static(__dirname + './public'))
app.set("view engine", "pug")

app.get("/", (request, response) => {
    response.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => {
    console.log("Example app listening at localhost")
})