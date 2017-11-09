const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/hacktivpress-kholes')
const Schema = mongoose.Schema, ObjectId = Schema.ObjectId
let userSchema = new Schema({
  username: String,
  password: String,
  salt: String
})
let User = mongoose.model('User', userSchema)
module.exports = User