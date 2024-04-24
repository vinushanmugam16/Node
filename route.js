const source = require('fs');
const http = require('http');
const html = source.readFileSync('./Template/index.html', 'utf-8');
let item = JSON.parse(source.readFileSync('./Data/items.json', 'utf-8'));
let itemList = source.readFileSync('./Template/itemlist.html', 'utf-8');
let url = require('url');

let foodItem = item.map((val) => {
    let output = itemList.replace('{{%ItemName%}}', val.itemName)
    output = output.replace('{{%ItemPrice%}}', val.price)
    output = output.replace('{{%ID%}}', val.id)
    return output;
})
const server = http.createServer((req, res) => {
    let { query, pathname: path } = url.parse(req.url, true);
    // console.log(state);
    // let path = req.url;   ///path of the file name
    // res.end(html);
    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        res.writeHead(200
            // {
            //     'Content-Type': 'html/text',
            //     'my-header': 'WELCOME'
            // }
        );
        res.end('You are in home page');
        // res.end(html.replace('{{%CONTENT%}}',itemList));
    }
    else if (path.toLocaleLowerCase() === '/about') {
        res.writeHead(200);
        res.end('You are in About page')
    }
    else if (path.toLocaleLowerCase() === '/items') {
        if (!query.id) {
            console.log('Query id: ', query.id);
            let itemResponsehtml = html.replace('{{%CONTENT%}}', foodItem.join(','))
            res.writeHead(200, {
                // 'Content-Type': 'application/json'
                // 'Content-Type': 'html/text'
            })
            // res.end('You are Items page');
            // console.log(foodItem.join(','));
            console.log(itemResponsehtml);
            res.end(itemResponsehtml)
        }
        else {
            res.end('This is product with id =', query.id);
        }
    }
    else {
        res.writeHead(404);
        res.end('Page Not Found');
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started');
})
