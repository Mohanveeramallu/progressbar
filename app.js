const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://narayanaveeramallu:O6KB2n1NQBtgVuyk@sasi.tmxy52y.mongodb.net/?retryWrites=true&w=majority");

const User = require('./model/usermodel');
http.listen(3000, function(){
    console.log('Server is running');
});