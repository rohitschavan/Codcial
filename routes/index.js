const express = require('express');
const homecontroller = require('../controllers/home')
const profilecontroller = require('../controllers/profile')
const router = express.Router();

console.log('router loaded')
module.exports = router;

router.get('/',homecontroller.home)

router.get('/profile',profilecontroller.profile)