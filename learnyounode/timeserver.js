var net = require('net');

var port = process.argv[2];

function addZero(value){    
    if (value < 10){
        return ('0' + value);
    }
    return value;
}

function currentDate() {
    var date = new Date();
    date = date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' 
    + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + ':'
    + addZero(date.getMinutes());
    return date;
}

var server = net.createServer(function (socket) {
    socket.write(currentDate() + '\n');
    socket.end();
})
server.listen(port);