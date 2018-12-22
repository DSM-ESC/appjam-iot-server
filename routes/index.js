const express = require('express');
const router = express.Router();

router.get('/test', function(req, res, next) {
  console.log(req.body.message);
  res.json({success: true});
});

module.exports = router;
