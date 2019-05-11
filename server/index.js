const express = require('express');
const mongoose = require('mongoose');
const dbconfig = require('./config/dev');
const FakeDb = require('./fake-db');

const app = express();

mongoose.connect(dbconfig.DB_URL, { useNewUrlParser: true })
				.then( () => {
					const fakeDb = new FakeDb();
					fakeDb.seedDB();
				}).catch( (error) => {
					console.log("Error", error);
				});

app.get('/rentals', function(req, res) {
	return res.json({"success" : true});
})

//const PORT = proess.env.PORT || 3001;

app.listen(3001, function() {
	console.log("This is running");
})