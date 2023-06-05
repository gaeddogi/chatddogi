const express = require('express'),
    router = express.Router(),

    controller = require('../controller')


router.get('/', controller.helloWorld)

module.exports = exports = router