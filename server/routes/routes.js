const express = require('express')
const router = express.Router()

const controller = require('../controllers/controllers')

// router.get('/coins', controller.getCoins)
// router.get('/exchanges', controller.getExchanges)
router.get('/coins', controller.getCoins)
// router.get('/:id', controller.getSpec)
module.exports = router