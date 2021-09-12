const express = require('express');
const router = express.Router();
let termsController = require('../controllers/terms.controller');

router.route('/terms').get(termsController.index);

module.exports = router;
