var express = require('express');
const profilecontroller = ('../controllers/profile.js')
const router  = express.Router();

router.get('/',profilecontroller.profile);


module.exports = router;