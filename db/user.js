const mongoose = require('mongoose');
const schema = mongoose.Schema({
    username:String,
    name:String,
    password:String,
    age:Number,
    lastIP:{type:String, default:''},
    regIP:String
});
module.exports = mongoose.model("User", schema)