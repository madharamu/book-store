var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        name : String,
        emailId : String,
        password : String
    },
    {   versionKey : false  }
);

module.exports = mongoose.model('User',UserSchema);