var connection = require('./connection');

function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push('?');
	}
	return arr.toString();
}

/* Convert an object into a SET statement
	example: object {id: 20} is converted to id = 20 
	
	Arguments:
	ob: Object to be converted
*/
function objToSql(ob) {
  	var arr = [];

  	for (var key in ob) {
    	if (Object.hasOwnProperty.call(ob, key)) {
      		arr.push(key + "=" + ob[key]);
   	 	}
  	}
  	return arr.toString();
}


var orm = {
	/** Select all records from table
		Arguments:
		table: name of the table used in the query
		callBack: this function is called whit the results, when the query is done
	*/
	selectAll: function(table, callBack){
		var query = 'SELECT * FROM ' + table;

		connection.query(query, function(err, result){
			if(err) throw err;

			callBack(result);
		});
	},

	insertOne: function(table, fields, values, callBack){
		var query = 'INSERT INTO ' + table + ' (';
			query += fields.toString() + ') VALUES (';
			query += printQuestionMarks(values.length);
			query += ' )';

		 connection.query(query, [values], function(err, result){
		 	if(err) throw err

		 	callBack(result);
		 });
	},

	/* Method updateOne: It is used to update any table

		Arguments: 
		table: table to be updated
		fieldsValues: Object containing field/value pairs, example {devour: true}
		condition: WHERE statement, example id = 3
		callBack: Function to executed when the query is done
	*/
	updateOne: function(table, fieldsValues, condition, callBack){
		var query = 'UPDATE ' + table + ' SET ';
			query += objToSql(fieldsValues);
			query += ' WHERE ' + condition;
		console.log(query);

	    connection.query(query, function(err, result){
		 	if(err) throw err

		  	callBack(result);
		});
	}
}

module.exports = orm;