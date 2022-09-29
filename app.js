require('dotenv').config(); // De esta manera se pueden empezar a establecer las variables de entorno (luego de haber instalado el paquete de terceros "dotenv" )
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estático en la home page. Express lo hará de forma predeterminada en el archivo index.html que encuentre dentro del path "public" o el que le ingresemos
app.use( express.static('public') ); // la carpeta pública tiene prioridad sobre las rutas que se definan en el código 

// Este ya no se ejecuta porque se sirvió contenido estático (se ejecutó el middleware):
// app.get('/', (req, res) => {
//  res.send('Home page')
// })

//app.get('/hola-mundo', (req, res) => {
//    res.send('Hola mundo en su respectiva ruta')
//});

app.get('*', (req, res) => { // Cualquier otra ruta que no sean las anteriores va a disparar esto
    res.sendFile( __dirname + '/public/index.html'); // Envío contenido estático. El "__dirname" se refiere al path donde está corriendo la aplicación
});

//app.get('/', (req, res) => { 
//    res.render('home', {
//        nombre: 'Fernando Herrera',
//        titulo: 'Curso de Node'
//    }); // Cuando se renderiza un archivo de handlebars (hbs), este se busca siempre en la carpeta con nombre "views"
//});

//app.get('/generic', (req, res) => { 
//    res.render('generic', {
//        nombre: 'Fernando Herrera',
//        titulo: 'Curso de Node'
//    });
//});

//app.get('/elements', (req, res) => { 
//    res.render('elements', {
//        nombre: 'Fernando Herrera',
//        titulo: 'Curso de Node'
//    }); 
//});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })