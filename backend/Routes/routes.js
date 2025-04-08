const { codechecker } = require('../Controllers/codechecker');
const {errorchecker} = require('../Controllers/errorcheck')
const router = require('express').Router();

router.post('/codechecker',codechecker)
router.post('/error',errorchecker)

module.exports = router;