const express = require('express');
const router = express.Router();
const RentalModel = require('../model/rental');

router.get('/', function(req, res) {
	 RentalModel.find({}, function(err, rental) {
			return res.json(rental);
	});
})

	
router.get('/:id', function(req, res) {
	const id = req.params.id;
	RentalModel.findById(id, function(error, rental) {
		if(error) {
			res.status(422).send({error: [{title: 'Rental Error', message: 'No rental found'}]});
		}

		return res.json(rental);	
		
		
	})
});

module.exports = router;