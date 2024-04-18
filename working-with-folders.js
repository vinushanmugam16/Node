const fs = require('fs');
const folderName ='./Files/new.txt'

try{
    if(!fs.existsSync(folderName)){
        fs.mkdirSync(folderName);
    }
    else{
        console.log('Already exists');
    }
}
catch(err){
    console.error(err);   
}

// fs.readdirSync(folderName);


// try{
//     fs.renameSync('./Files/new.txt','./Files/source.txt')
// }
// catch(err){
//     console.error(err);
// }



// fs.rmdir('./Files/source.txt', err => {
//   if (err) {
//     throw err;
//   }

//   console.log(`Directory is deleted!`);
// });

