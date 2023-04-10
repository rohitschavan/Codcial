var express = require('express');


var port = 9000;

var app = express();

app.use('/',require('./routes/index'));

app.set('view engine','ejs');

app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`error ${err}`);
    }else{
        console.log('running successfully');
    }
})