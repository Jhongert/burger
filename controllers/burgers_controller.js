var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

router.get('/', function(){
	burger.selectAll();
});

router.post('/', function(){
	burger.insertOne();
});

router.put('/', function(){
	burger.updateOne();
});

module.exports = router;