const http = require('node:http');
const app = require('./src/app');


//config .env
require('dotenv').config();


//config BD
require('./src/config/db');

//server
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () => {
    console.log(`Servidor escuchando en puerto ${3000}`);
})
server.on('error', (error) => console.log(error));