var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/:id', function(req, res) {
  const data = models.postData(req.params.id)
  res.json(data);
});

module.exports = router;
