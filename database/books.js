const mongoose = require('mongoose');

//creating  a book Schema
const BookSchema = mongoose.Schema({
    ISBN: String,
    title: String,
    pubDate: String,
    language: String,
    Page_num:Number,
    Author:[Number],
    publication: Number,
    category:[String]
});

// create a book model
const BookModel = mongoose.model(BookSchema);

 module.exports = BookModel;