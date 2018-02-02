const fs = require('fs');
const path = require('path');

function filter (dirname, extension, callback){
    extension = '.' + extension;
    fs.readdir(dirname, function(err, list){
        if (err) return callback(err);

        list = list.filter(function (file){
            return path.extname(file) === extension;
        })
        return callback(null, list);
    })
}

module.exports = filter;