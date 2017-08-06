var ORM = require('../config/orm');

var burger = {
	selectAll: function(){
		console.log('burger select');
	},

	insertOne: function(){
		console.log('burger insert');
	},

	updateOne: function(){
		console.log('burger update');
	}

}

module.exports = burger;