const express = require('express')
const router = express.Router()
const createClubController = require('../controllers/createClub') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, createClubController.getCreateClub)
router.post('/createClub', createClubController.createClub)

module.exports = router