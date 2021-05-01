const router = require('express').Router()
const { create, getSiblings } = require('../controllers/PetController')
const Authenticate = require('./Authenticator')

router.get('/current', Authenticate, getSiblings)
router.post('/create', Authenticate, create)

module.exports = router