const http = require('node:http');
const app = require('./src/app');

require('dotenv').config();


const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () => {
    console.log(`Servidor escuchando en puerto ${3000}`);
})
server.on('error', (error) => console.log(error));