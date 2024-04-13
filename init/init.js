const mongoose = require("mongoose");
const initData = require("./data.js");
const Restaurant = require("../models/restaurant.js");

const MONGO_URL = "mongodb://localhost:27017/restaurants";

main()
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
	await Restaurant.deleteMany({});
	await Restaurant.insertMany(initData.data);
	console.log("Data initialized");
};

initDB();
