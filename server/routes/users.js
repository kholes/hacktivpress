const express = require('express')
const router = express.Router()
const controllers = require('../controllers/users')
router.get('/', controllers.getAll)
router.get('/:id', controllers.getById)
router.post('/', controllers.add)
router.put('/:id', controllers.edit)
router.delete('/:id', controllers.delete)
module.exports = router