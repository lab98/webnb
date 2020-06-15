var express = require('express');
var router = express.Router();

/* GET home page. */
exports.index = function (req, res) {
  res.render('index', {
    name: 'Express'
  });
};


/* GET login page. */
exports.index = function (req, res, next) {
  res.render('login', {
    title: 'Accedi'
  });
};



//module.exports = router;