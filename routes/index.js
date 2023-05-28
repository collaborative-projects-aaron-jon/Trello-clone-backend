const router = require('express').Router();

// use " router.use('/...', require('./(filename)')) " to organize routes;
router.use('/users', require('./users'));

module.exports = router;