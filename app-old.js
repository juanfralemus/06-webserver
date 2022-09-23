const http = require('http'); 

http.createServer( ( req, res ) => { // creamos el servidor

    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');    
    // res.writeHead( 200, { 'Content-Type': 'application/csv' });

    res.write( 'Hola Mundo' ); // esto tiene que ser un String, no un objeto

    res.end(); // con esto le decimos a Node que ya terminé de escribir esta respuesta

})
.listen( 8080 )

console.log( 'Escuchando el puerto', 8080 );