const path=require('path');
const file='./Files/append.txt';
console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));

console.log(path.basename(file,path.extname(file)));


const name='Files';
console.log(path.join('/',name,'input.txt'));

console.log(path.resolve('output.txt'));