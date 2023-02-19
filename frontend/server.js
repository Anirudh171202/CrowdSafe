require('dotenv').config();

const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');

app.set('port', process.env.PORT);

var server = http.createServer(app);

const database_str = process.env.DB_CONNECTION.replace('<password>', process.env.DB_PASSWORD)

const port = process.env.PORT;

mongoose.connect(database_str).then(con => console.log(`DB Connected!`))

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
