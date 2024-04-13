const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync");
// const session = require("express-session");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

const MONGO_URL = "mongodb://localhost:27017/instadine";

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
		res.render("Frontend/index.ejs", { allRestaurants });
	})
);

// Show Route
app.get(
	"/:id",
	wrapAsync(async (req, res) => {
		const { id } = req.params;
		const restaurant = await Restaurant.findById(id);
		res.render("rest/show.ejs", { restaurant });
	})
);

app.get("/register", (req, res) => {
	res.render("users/register");
});

app.post(
	"/register",
	wrapAsync(async (req, res) => {
		const { email, password } = req.body;
		const user = new User({ email });
		const registeredUser = await User.register(user, password);
		req.login(registeredUser, (err) => {
			if (err) return next(err);
			res.redirect("/");
		});
	})
);

app.get("/login", (req, res) => {
	res.render("users/login");
});

// app.post(
// 	"/login",
// 	passport.authenticate("local", {
// 		failureFlash: true,
// 		failureRedirect: "/login",
// 	}),
// 	(req, res) => {
// 		res.redirect("/");
// 	}
// );

// app.get("/logout", (req, res) => {
// 	req.logout();
// 	res.redirect("/");
// });

app.all("*", (req, res, next) => {
	next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
	const { statusCode = 500, message = "Something went wrong" } = err;
	res.status(statusCode).render("error.ejs", { message });
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
