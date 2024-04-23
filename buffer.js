const state=Buffer.from('Hello, Greetings of the day!');
console.log(state);

// const buf=Buffer.alloc(1024);
// const buf=Buffer.alloc(10);
const buf=Buffer.allocUnsafe(10)
console.log(buf);


console.log(state.toString());

console.log(state.length);

const numbers=[1,3,2,83,231];
for(let i of numbers){
    console.log(i);
}

const source=Buffer.alloc(7);
source.write('Computer');
console.log(source);
console.log(source.toString());
