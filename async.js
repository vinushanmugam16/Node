/******Reading files in Async ******/

// let fs = require('fs');
// fs.readFile('./Files/input.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log('Reading File.... Asynchronously');


/******Reading files in Sync Callback ******/
// let fs = require('fs');
// const state = fs.readFileSync('./Files/input.txt');
// console.log(state.toString())
// console.log('This is Synchronous callback');


// let fs=require('fs');
// let text =fs.readFileSync('./Files/input.txt' , 'utf-8');
// console.log(text);

// let i=0;
// while(i<=5){
//     console.log('Number: ',i);
//     i++;
// }
// console.log('Welcome !');

/******Reading files in Async Callback******/
// let fs=require('fs');
// fs.readFile('./Files/input.txt' , 'utf-8', function(err, data){
//     console.log(data);
// });
// console.log('This is Asynchronous Callback');


// let fs=require('fs');
// fs.readFile('./Files/input.txt' , 'utf-8', function(err, data){
//     console.log(data);
// });

// let i=0;
// while(i<=5){
//     console.log('Number: ',i);
//     i++;
// }
// console.log('Welcome !');

// console.log('Callback Arrow Function!');
// let fs = require('fs');
// fs.readFile('./Files/input.txt', 'utf-8' ,(err, response)=>{
//     console.log(response);
// })

// let letter=['A','B', 'C']
// for(let i of letter){
//     console.log('Letter: ',i);
// }

function addition(num1, num2, num3, callback) {
    response = num1 + num2 + num3;
    callback(response)
}

function result(callback) {
    console.log(callback);
}
addition(3, 8, 1, result);


function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
}

function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
}

function initiate() {
    const someInput = 'hello this is a function ';
    middleware(someInput, function (result) {
        console.log(result);
    });
}

initiate();


//   function getSong() {
//     let songNoted = '';
//     let i = 100;
//     for (i; i > 0; i -= 1) {
//       songNoted += `${i} beers on the wall, you take one down and pass it around, ${i - 1} bottles of beer on the wall\n`;
//       if (i === 1) {
//         songNoted += "Hey let's get some more beer";
//       }
//     }

//     return songNoted;
//   }

//   function singSong(songNoted) {
//     console.log(songNoted);
//   }

//   const song = getSong();
//   singSong(song);


function getSong() {
    let _song = 'dfghjk';
    let i = 100;
    for (i; i > 0; i -= 1) {
        setTimeout(function () {
            _song += `${i} beers on the wall, you take one down and pass it around, ${i - 1
                } bottles of beer on the wall\n`;
            if (i === 1) {
                _song += "Hey let's get some more beer";
            }
        }, 0);
    }

    return _song;
}

function singSong(_song) {

    console.log('jhrtyu', _song);
}

const song = getSong('beer');
singSong(song);



let source = require('fs');
source.readFile('./Files/start.txt', 'utf-8', (err, resp) => {
    console.log(resp);
    source.readFile(`./Files/${resp}.txt`, 'utf-8', (err, data) => {
        console.log(data);
        console.log('Is there any error occurs: ', err);
        source.readFile('./Files/append.txt', 'utf-8', (err, value) => {
            console.log(value);
            source.writeFile('./Files/output.txt',`${data} ${value}`, ()=>{
                console.log('File has been updated');
            })
        })
    })
})


/***Timers***/
function getDetails(name,age,callback){
    let res=`Their details : ${name} and ${age}`;
    callback(res);
}
function storeDate(callback){
    setTimeout(()=>{
    console.log(callback)},9000);
}
getDetails('Vinu', 22, storeDate);


const food=(variety , dish)=>{
    console.log(variety,dish);
}
setTimeout(food,2000,'Non-veg','Mutton gravy');


let shop = setTimeout(()=>{
    console.log('There are nearly 430 shops located near the lake')
},3000);
clearTimeout(shop);  //to delete function execution

setTimeout(()=>{
    console.log('This will be executed')
},0);
console.log('Ths will be executed first');


// setInterval(() => {
//     console.log('It will execute in Loop');
// }, 2000);

const sum=()=>{
    setTimeout(()=>{
        console.log(98+2);
    },2000);
}
setTimeout(()=>{console.log(458);},2000)
sum();
