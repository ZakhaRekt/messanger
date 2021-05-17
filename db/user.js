const mongoose = require('mongoose');
const schema = mongoose.Schema({
    username:String,
    name:String,
    password:String,
    age:Number,
    token:{type: String, default:''},
    lastIP:{type:String, default:''},
    messages: {type:Array, default: []},
    regIP:String
});
module.exports = mongoose.model("User", schema)