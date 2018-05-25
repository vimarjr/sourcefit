module.exports = {
  getPersons: function(req, res) {
  	PersonService.getPersons(function(err, persons) {
  		if(err) {
				res.ok();
  		} else {
  			res.ok(persons);
  		}
  	});
  },
  getPerson: function(req, res) {
  	let findQuery = {};
  	if(req.params.hasOwnProperty("id")) {
  		findQuery.id = req.params.id;
  	}
  	if(req.params.hasOwnProperty("first_name")) {
  		findQuery.first_name = req.params.first_name;
  	}
  	if(req.params.hasOwnProperty("last_name")) {
  		findQuery.last_name = req.params.last_name;
  	}
  	if(req.params.hasOwnProperty("contact_number")) {
  		findQuery.contact_number = req.params.contact_number;
  	}

  	PersonService.getPerson(findQuery, function(err, person) {
  		if(err) {
				res.ok();
  		} else if(person) {
  			res.ok(person);
  		} else {
  			res.json(404, {});
  		}
  	});
  },
  createPerson: function(req, res) {
  	let query = {
  		first_name: req.body.first_name,
  		last_name: req.body.last_name,
  		contact_number: req.body.contact_number
  	}

  	PersonService.createPerson(query, function(err, person) {
  		if(err) {
				res.ok();
  		} else {
  			res.ok(person);
  		}
  	});
  },
  updatePerson: function(req, res) {
  	let updateQuery = {
  		first_name: req.body.first_name,
  		last_name: req.body.last_name,
  		contact_number: req.body.contact_number
  	}

  	PersonService.updatePerson(req.params.id, updateQuery, function(err, person) {
  		if(err) {
				res.ok();
  		} else {
  			res.ok(person);
  		}
  	});
  },
  deletePerson: function(req, res) {
  	PersonService.deletePerson(req.params.id, function(err, person) {
  		if(err) {
				res.ok();
  		} else {
  			res.ok(person);
  		}
  	});
  }
};
