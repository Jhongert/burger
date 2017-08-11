var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

router.get('/', function(req, res){
	burger.selectBurgers(function(data){
		res.render("index", { burgers: data });
	});
});

router.post('/burgers/insertBurger', function(req, res){
	burger.insertBurger(req.body.burger_name, function(){
		res.redirect('/');
	});
});

router.put('/burgers/updateBurger/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	burger.updateBurger(condition, function(){
		res.redirect('/');
	});
});

module.exports = router;