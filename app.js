const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end("server creation in local machine ")
});

server.listen(8000, '127.0.0.1', () => {
    console.log("server started on 8000 port");
});

//-------------------------------------------------//
// const fs = require('fs');
// const http = require('http');
// const url = require('url');

// fs.readFileSync
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.end("server creation in local machine ");
// });