const http = require('http');
const url = process.argv[2];
var string = '';

http.get(url, (response) => {
    response.on("data", (data) => {
        string = string + data.toString();
    })
    response.on("end", (end) => {
        console.log(string.length);
        console.log(string);
    })
})