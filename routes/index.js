const express = require('express');
const homecontroller = require('../controllers/home')
const router = express.Router();
const profilecontroller = require('../controllers/profile')

console.log('router loaded')

router.get('/users',profilecontroller.profile)
router.get('/',homecontroller.home)


module.exports = router;