function getData (callback){
    callback('123')
}


getData(function (n){
    console.log('callback is be user');
    console.log(n);
});