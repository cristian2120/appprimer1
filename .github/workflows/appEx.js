const express = require('express')
const app = express()
const port = 8080;

//Servir un contenido estático
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Home page')
})
app.get('/holamundo', function (req, res) {
    res.send('Hello World con su respectiva ruta')
  })
  app.get('*', (req, res)=>{
    res.sendFile(__dirname+'/public/404.html')
  })
  app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
  })

