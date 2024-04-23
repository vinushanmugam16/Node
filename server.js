const read = require('readline');
const source = require('fs');
const http = require('http')

// const server= http.createServer((request,response)=>{
//     response.end('Hello , Server')
//     console.log('New req received');
// });
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('Server has started');
// });

// const server = http.createServer((req, res) => {
//     res.end("<h2>HI from the server</h2>")
// });

// server.listen(8000, '127.0.0.1', () => {
//     console.log("Server is started")
// });


const html=source.readFileSync('./Template/index.html', 'utf-8')
const server = http.createServer((req, res) => {
    res.end(html);
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Server is started");
});