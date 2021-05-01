const router = require('express').Router()
const { create, deleteVacc } = require('../controllers/VaccineController')

router.post('/create', create)
router.delete('/delete', deleteVacc)

module.exports = router