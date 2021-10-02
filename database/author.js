const mongoose = require('mongoose');

//creating  a Author Schema
const AuthorSchema = mongoose.Schema({
    id:Number,
    name:String,
    books:[String],
});

// create a Author model
const AuthorModel = mongoose.model(AuthorSchema);

 module.exports = AuthorModel;