const util=require('util');
var name='Vinudharshini';
age=22;

const result=util.format(`My name is ${name} and age is ${age}`);
console.log(result);

const message = util.format('My %s has %d kittens', 'cat', 5);
console.log(message);

var food='veg';
const answer=util.debug(food);
console.log(answer);
