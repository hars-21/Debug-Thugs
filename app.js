const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const flash = require("connect-flash");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: "hello hi",
		cookie: {
			expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
			maxAge: 1000 * 60 * 60 * 24 * 7,
			httpOnly: true,
		},
	})
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.success = req.flash("success");
	res.locals.error = req.flash("error");
	next();
});

const MONGO_URL = "mongodb://localhost:27017/instadine";

function isLoggedIn(req, res, next) {
	if (!req.isAuthenticated()) {
		req.session.returnTo = req.originalUrl;
		req.flash("error", "You must be signed in first!");
		return res.redirect("/login");
	}
	next();
}

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

// Show Route
app.get(
	"/restaurant/:id",
	wrapAsync(async (req, res) => {
		const { id } = req.params;
		const restaurant = await Restaurant.findById(id);
		res.render("rest/show.ejs", { restaurant });
	})
);

app.get("/signup", (req, res, next) => {
	res.render("users/signup.ejs");
});

app.post(
	"/signup",
	wrapAsync(async (req, res, next) => {
		try {
			let { username, email, password } = req.body;
			const newUser = new User({ username, email });
			const registeredUser = await User.register(newUser, password);
			req.flash("success", "Welcome to Instadine!");
			res.redirect("/");
		} catch (e) {
			req.flash("error", e.message);
			res.redirect("/signup");
		}
	})
);

app.get("/login", (req, res, next) => {
	res.render("users/login.ejs");
});

app.post(
	"/login",
	passport.authenticate("local", {
		failureRedirect: "/login",
		failureFlash: true,
	}),
	async (req, res, next) => {
		req.flash("success", "Welcome back!");
		res.redirect("/");
	}
);

app.get("/logout", function (req, res, next) {
	req.logout((err) => {
		if (err) {
			return next(err);
		}
		req.flash("success", "Logged out successfully!");
		res.redirect("/signup");
	});
});

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
