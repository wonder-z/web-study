const add = (x, y)=>{
  return x + y;
};

new Promise((resolve) => {
  setTimeout(()=>{
    console.log('定时器执行完了');
    resolve();
  },1000)
})

console.log((add(2, 5)));
