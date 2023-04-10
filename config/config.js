const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codcial');

var db= mongoose.connection

db.once('open',function(){
    console.log('Db connected');
})

db.on('error',console.error.bind(console,'something happended'));

console.log('rohit');