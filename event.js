// console.log('first');
// setTimeout(()=>{
//     console.log('second')
// },2000)
// console.log('third');

// console.log('start');
// let state=setInterval(()=>{
//     console.log('processing...')
//     clearInterval(state);
// },2000)
// console.log('end');

const source = require('fs');

// console.log('Program started');
// setTimeout(()=>{
//     console.log('Timer')
// },0)
// source.readFile('./Files/input.txt' , 'utf-8', ()=>{
//     console.log('File read completely');
// })
// setImmediate(()=>{console.log('Setting Immediate timer ')})

// console.log('Program completed');


// timers within I/O cycle
// console.log('Match has started');
// source.readFile('./Files/input.txt' , 'utf-8', ()=>{
//     console.log('Expected files are read completely');
//     setTimeout(()=>{
//         console.log('Timeout settings......')
//     },0)

// setImmediate(()=>{console.log('Immediate timer settings.. ')});

// })
// console.log('Match has ended');


// console.log('Planned for a trip');
// source.readFile('./Files/input.txt' , 'utf-8', ()=>{
//     console.log('Files are correct');
//     setTimeout(()=>{
//         console.log('Time to reach the Home')
//     },0)

// setImmediate(()=>{console.log('Immediatly Planned for stay home')});

// process.nextTick(()=>console.log('activated the process'))
// })
// console.log('Plan was cancelled');


// console.log('Isha feels herself a butterfly');
// setImmediate(()=>{
//     console.log('Ajay\'s role to play like a Cow');
// })
// setTimeout(()=>console.log('Divi herself took a role as Angel'));
// process.nextTick(()=>{console.log('Themself created a small drama');})
// console.log('They had the best day');


const bar = () => console.log('bar');
const baz = () => console.log('baz');
const foo = () => {
  console.log('foo');
  setTimeout(bar, 0);
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz();
  setImmediate(()=>console.log('Getting immediate response'))
  process.nextTick(()=>console.log('Will display after the end of event loop'))
}
foo();