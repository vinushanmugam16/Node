type details = {
    name: string;
    age: number;
    city: string;
}

var worker: details = {
    name: 'Aruvi',
    age:22,
    city:'Salem'
}

console.log(`${worker.name} is ${worker.age} years old and she is from ${worker.city}` );

// console.log(WebAssembly);