const fs =require('fs');

const server=require('http').createServer();

//s0l-1
// server.on('request',(req,res) => {
//     fs.readFile("test-file.txt", (err, data) => {
//         if (err) console.log(err);
//         res.end(data);
//        });
// });

//sol-2
// server.on("request", (req, res) => {
//  const readable = fs.createReadStream("test-file.txt");
//   readable.on("data", chunk => {
//     res.write(chunk);
//   });
//   readable.on("end", () => {
//     res.end();
//   });
//   readable.on("error", err => {
//     console.log(err);
//     res.statusCode = 500;
//     res.end("File not found!");
//   });
// });

//sol-3
server.on("request", (req, res) => {
const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writeableDest)
});

server.listen(8000,'127.0.0.1',() => {
    console.log("Listening........8000 port");
});


