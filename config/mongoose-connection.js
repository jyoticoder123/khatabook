const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI).then(function(){
    console.log('connect to Mongoose');
});

let db = mongoose.connection;
module.exports = db;