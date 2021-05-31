//在普通函数前加上async变成异步函数
//异步函数默认的返回值时promise对象
//在一部函数内部使用throw关键字金行错误抛出
//await关键字，只能出现在异步函数中
//await promise它可以暂停异步函数的执行等待promise对象返回结果后再向下执行函数
// async function fn(){
//     throw 'hanppen some mistakes';
//     return  123;
// }
// // console.log(fn());
// fn().then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

async function p1(){
    return 'p1';
}

async function p1(){
    return 'p2';
}

async function p1(){
    return 'p3';
}

async function run(){
    let r1 = await p1()
    let r2 = await p2()
    let r3 = await p3()
}