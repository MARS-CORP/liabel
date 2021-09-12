const express = require('express');
const router = express.Router();

router.route('/pricing').get((req, res) => {
    res.render('pricing/index');
})


module.exports = router;