const model = require('../models/User')
class Login {
  static getLogin(req,res) {
    model.find({username: req.body.username}).then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
  }
}
module.exports = Login