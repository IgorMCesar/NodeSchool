const list = require('./module');

const dirname = process.argv[2];
const extension = process.argv[3];

list(dirname, extension, (err, data) => {
    if (err) return console.error('There was an error:', err);
    data.forEach(element => {
        console.log(element);
    });
})