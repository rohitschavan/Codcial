var express = require('express');

var port = 9000;

var app = express();

app.listen(port,function(err){
    if(err){
        console.log(`error ${err}`);
    }else{
        console.log('running successfully');
    }
})