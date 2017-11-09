const express = require('express')
const router = express.Router()
const controllers = require('../controllers/articles')
router.get('/', controllers.getAll)
module.exports = router