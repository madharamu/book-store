var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema(
    {
        title : String,
        author : String,
        category : String,
        price : Number
    },
    {   versionKey : false  }
);

module.exports = mongoose.model('Book', BookSchema);