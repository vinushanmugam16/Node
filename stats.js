const fs = require('fs');
fs.stat('./Files/input.txt', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    else {
        console.log(stats);
    }
    console.log('Is File', stats.isFile());
    console.log('Is directory', stats.isDirectory());
    console.log('Is symbolic link',stats.isSymbolicLink());
    console.log('Size ', stats.size);

})


// try {
//     let stats = fs.statSync('./Files/append.txt');
//     console.log(stats);
// }
// catch (err) {
//     console.error(err);
// }
