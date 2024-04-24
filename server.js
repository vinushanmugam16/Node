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
    res.statusCode=200;
    res.setHeader('My-Header','Hello World!');
    let connect=html.replace('{{%CONTENT%}}','My computer');
    // res.end(connect);

    // res.write('<html>');
    // res.write('<body>');
    // res.write('<h1>Valuing stakeholder</h1>');
    // res.write('</body>');
    // res.write('</html>');
    // res.end()
  
    res.end('<html><body><h2>Environment and Human Impact</h2></body></html>')
});

server.listen(8040, '127.0.0.1', () => {
    console.log("Server is started");
});