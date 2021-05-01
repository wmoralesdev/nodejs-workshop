const router = require('express').Router()
const { create, deleteVacc, getAll } = require('../controllers/VaccineController')

router.get('/', getAll)
router.post('/create', create)
router.delete('/delete', deleteVacc)

module.exports = router