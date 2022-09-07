const express = require('express')
const router = express.Router()
const editClubController = require('../controllers/editClub') 
const { ensureAuth } = require('../middleware/auth')

router.get('/:id', ensureAuth, editClubController.getEditClub)
router.put('/editClub/:id', editClubController.editClub)
router.delete('/deleteClub', editClubController.deleteClub)

module.exports = router