// wiki.js - Wiki route module

var express = require('express');
var router = express.Router();

// Home page route
router.get('/artists', function(req, res) {
  res.send('Artists');
});

// About page route
router.get('/description', function(req, res) {
  res.send('Description of this artist');
});

module.exports = router;