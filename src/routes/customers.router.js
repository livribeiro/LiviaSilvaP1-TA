const express = require('express')
const controller = require('../controllers/customers.controller')

const router = express.Router()

router.get('/', controller.listAll)
router.post('/', controller.create)
router.put('/:cpf', controller.update)
router.delete('/:cpf', controller.remove)

module.exports = router