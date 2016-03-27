var mongoose = require('mongoose')

var emailSchema = mongoose.Schema({
    name         : {type: String},
    email        : {type: String},
    message      : {type: String},
})

module.exports = mongoose.model('emails', emailSchema)