const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    birthDate:Date,
    registerDate:Date,
    lastLogin:Date,
    userId:String,
})

const User = mongoose.model('User',UserSchema);

module.exports = User;