const source = require('fs');
const http = require('http');
const html = source.readFileSync('./Template/index.html', 'utf-8')

const server = http.createServer((req, res) => {
    let path = req.url;
    // res.end(html);
    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        res.end('You are in home page');
    }
    else if (path.toLocaleLowerCase() === '/about') {
        res.end('You are in About page')
    }
    else{
        res.end('Page Not Found');
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started');
})
