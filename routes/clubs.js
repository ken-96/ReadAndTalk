const express = require('express')
const router = express.Router()
const clubsController = require('../controllers/clubs') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, clubsController.getClubs)
router.get('/myClubs/:id', clubsController.getMyClubs)
router.get('/:id', clubsController.getClub)
router.put('/updateClub', clubsController.updateClub)
router.put('/joinClub', clubsController.joinClub)
router.put('/unjoin', clubsController.unjoinClub)
router.put('/rateClub', clubsController.rateClub)

module.exports = router