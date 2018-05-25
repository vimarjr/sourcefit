module.exports = {
	getPersons: function(callback) {
		Person.find({}, callback);
	},
	getPerson: function(query, callback) {
		Person.findOne(query, callback);
	},
	createPerson: function(query, callback) {
		Person.create(query, callback);
	},
	updatePerson: function(findQuery, updateQuery, callback) {
		Person.update(findQuery, updateQuery, callback);
	},
	deletePerson: function(query, callback) {
		Person.destroy(query, callback);
	}
};