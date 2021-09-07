const express = require('express');
const router = express.Router();

router.route('/terms').get((req, res) => {
    res.render('terms/index');
})

module.exports = router;