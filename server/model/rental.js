const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
	title: {type: String, require: true, max: [120, 'Too long, max is 120 character']},
	city: {type: String, require: true},
	street: {type: String, require: true, max: [20, 'Too long, max is 20 character']},
	category: {type: String, require: true, lowercase: true},
	image: {type: String},
	bedroom: Number,
	shared: Boolean,
	description: {type: String, require:true},
	dailyRate: Number,
	createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('RentalModel', rentalSchema);