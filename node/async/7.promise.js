//  依次执行三个文件，解决回调地狱问题

const fs = require('fs');
// let promise = new Promise((resolve, reject)=>{
//     fs.readFile('./1.txt', 'utf8', (err,result) =>{
//         if(err!=null){
//             reject(err);
//         }
//         else{
//             resolve(result);
//         }
//     });
// });
// promise.then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })
function p1 (){
    return new Promise((resolve, reject)=>{
        fs.readFile('./1.txt', 'utf8', (err,result) =>{
            if(err!=null){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}



function p2(){
    return new Promise((resolve, reject)=>{
        fs.readFile('./2.txt', 'utf8', (err,result) =>{
            if(err!=null){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}


function p3(){
    return new Promise((resolve, reject)=>{
        fs.readFile('./3.txt', 'utf8', (err,result) =>{
            if(err!=null){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}


p1().then((result)=>{
    console.log(result);
    return p2();
})
.catch((err)=>{
    console.log(err);
    return p2();
})
.then((result)=>{
    console.log(result);
    return p3();
})
.catch((err)=>{
    console.log(err);
    return p3();
})
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})
