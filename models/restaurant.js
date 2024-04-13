const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	image: String,
	location: String,
	rating: Number,
	// reviews: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: "Review",
	// 	},
	// ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
