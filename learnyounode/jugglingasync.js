const http = require('http');
var strings = [];
var count = 0;

function juggle(index) {
    http.get(process.argv[index + 2], (response) => {
        var text = "";
        response.on("data", (data) => {
            text += data.toString();
            strings[index] = text;
        })
        response.on("error", (error) => {
            return console.error("There was an error: " + error);
        })
        response.on("end", () => {
            count++;

            if(count === 3){
                print();
            }
        })
    })
}

for(var i = 0; i < 3; i++){
    juggle(i);
}

function print() {
    for (var i = 0; i < 3; i++){
        console.log(strings[i]);
    }
}