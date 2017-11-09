const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/hacktivpress-kholes')
const Schema = mongoose.Schema, ObjectId = Schema.ObjectId
let articleSchema = new Schema({
  title: String,
  article: String,
  category: String,
  Author: [{type: Schema.Types.ObjectId, ref:'Users'}],
  createdAt: Date
})
let Article = mongoose.model('Article', articleSchema)
module.exports = Article