const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/hacktivpress-kholes')
const Schema = mongoose.Schema, ObjectId = Schema.ObjectId
let articleSchema = new Schema({
  article: String,
  category: String,
  Author: [{type: Schema.Types.ObjectId, ref:'Users'}],
  createdAt: Date
})
let Article = mongoose.model('Article', articleSchema)
module.exports = Article