require('dotenv').config();

const app = require('./app');
const http = require('http');

app.set('port', process.env.PORT);

var server = http.createServer(app);

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
server.on('error', onError);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
