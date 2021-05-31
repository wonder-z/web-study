const path = require('path');
const fs = require('fs');
console.log(__dirname);
console.log(path.join(__dirname,'01.js'));
fs.readFile(path.join(__dirname,'01.js'),'utf-8',(err,doc)=>{
    console.log(err);
    console.log(doc);
})
