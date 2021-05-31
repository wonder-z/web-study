console.log('aa');
setTimeout(function(){
    console.log('bb');
},2000);
setTimeout(function(){
    console.log('cc');
},0);
console.log('dd');