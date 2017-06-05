var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/:id', function(req, res) {
  const data = models.userData(req.params.id)
  res.json(data);
});

router.get('/:id/posts/', function(req, res) {
  const data = models.userpostData(req.params.id)
  res.json(data);
});

module.exports = router;
