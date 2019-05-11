const express = require('express');
const mongoose = require('mongoose');
const dbconfig = require('./config/dev');
const FakeDb = require('./fake-db');

const rentalRouters = require('./router/router');

const app = express();

mongoose.connect(dbconfig.DB_URL, { useNewUrlParser: true })
				.then( () => {
					const fakeDb = new FakeDb();
					fakeDb.seedDB();
				}).catch( (error) => {
					console.log("Error", error);
				});


app.use('/api/v1/rentals', rentalRouters);
//const PORT = proess.env.PORT || 3001;

app.listen(3001, function() {
	console.log("This is running");
})