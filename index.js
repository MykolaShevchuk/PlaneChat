var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(port);

app.use('/app', express.static('app'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('messages', function (data) {
        socket.broadcast.emit('messages', data);
    });
});