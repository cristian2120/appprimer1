const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;



// Servir contenido estático desde el directorio 'public'
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Home Page');
});

app.get('/holamundo', function (req, res) {
  res.send('Hola mundo desde dirección');
});

// Ruta para manejar cualquier otra URL no definida previamente
app.get('*',  (req, res)=> {
  res.sendFile(__dirname+'/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
