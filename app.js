console.log('Hello World!');

// ******Reading Input and Writing Output******
// const readline = require("readline");
// const state=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// state.question('Please Enter your Name : ',(name)=>{
//     console.log('Entered Name : ',(name));
//     state.close()
// })

// state.on('close', ()=>{
//     console.log('Interface closed!');
//     process.exit(0);
// })



/*** Reading & Writing the file ***/
const fs = require('fs');
let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(textIn);

// fs.writeFileSync('./Files/output.txt',`Hi , I am from Output text`);


let content = `${textIn} All informations are now in this file ,\nDated: ${new Date()}`
fs.writeFileSync('./Files/output.txt', content);

var x = 10;
console.count('The value of x is ' + x + ' , how many times?');

const numbers = [1, 9, 5, 23, 9, 0, 5];
numbers.forEach(num => {
    console.count(num);
});
console.count(numbers);

const fruits = ['apple', 'apple', 'pine', 'apple']
console.count(fruits);
fruits.forEach((fruit) => {
    console.count(fruit);   
})

console.countReset('apple');
fruits.forEach((fruit) => {
    console.count(fruit);   
})

// const state= require('chalk');
// console.log(state.yellow('Aspire to Inspire'));