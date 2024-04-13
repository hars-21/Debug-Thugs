const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

const MONGO_URL = "mongodb://localhost:27017/restaurants";

main()
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect(MONGO_URL);
}

// Index route
app.get(
	"/",
	wrapAsync(async (req, res) => {
		const allRestaurants = await Restaurant.find({});
		res.render("rest/index.ejs", { allRestaurants });
	})
);

// New Route
app.get("/new", (req, res) => {
	res.render("rest/new.ejs");
});

// Show Route
app.get(
	"/:id",
	wrapAsync(async (req, res) => {
		const { id } = req.params;
		const restaurant = await Restaurant.findById(id);
		res.render("rest/show.ejs", { restaurant });
	})
);
