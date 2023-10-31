const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    title : {
        type : String,
        required: true
    },
    author : {
        type : String,
        required: true
    },
    summary : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
    }
})

const Userdb = mongoose.model('bookdb', schema);

module.exports = Userdb;