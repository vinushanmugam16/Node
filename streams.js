const source = require('fs');
var data = ''
const manage = source.createReadStream('./Files/input.txt', 'utf-8');

manage.on('data', (chunk) => {
   data += chunk;
   //    console.log(data);
})
// manage.on('end',()=>{
//     console.log(data);
// })
// manage.on('error',(err)=>{
//     console.log(err);
// })
console.log('Completed!');


const response = source.createWriteStream('./Files/output.txt')
response.write(`These are streams to be write here`);
response.end();
response.on('finish', () => {
   console.log("Write completed.");
});
response.on('error', (err) => {
   console.log(err);
});

//reading one file and writing it to the another file
const read = source.createReadStream('./Files/input.txt', 'utf-8');
const writing = source.createWriteStream('./Files/output.txt');
read.pipe(writing);


var zlib = require('zlib');
source.createReadStream('./Files/input.txt')
   .pipe(zlib.createGzip())
   .pipe(source.createWriteStream('./Files/input.txt.gz'));

console.log("File Compressed.");