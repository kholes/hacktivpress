const model = require('../models/User')
class User {
  static getAll(req,res) {
    model.find().then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
  }
  static getById(req,res) {
    model.findOne({_id: req.params.id})
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
  }
  static add(req,res) {
    model.create(req.body)
    .then(result => {
      req.body['_id'] = result._id
      res.send(req.body)
    })
    .catch(err => {
      res.send(err)
    })
  }
  static edit(req,res) {
    model.update({_id: req.params.id}, req.body)
    .then(result => {
      req.body['_id'] = req.params.id
      res.send(req.body)
    })
    .catch(err => {
      res.send(err)
    })
  }
  static delete(req,res) {
    model.remove({_id: req.params.id})
    .then(result => {
      res.send(req.params.id)
    })
    .catch(err => {
      res.send(err)
    })
  }
}
module.exports = User