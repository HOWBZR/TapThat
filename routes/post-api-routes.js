const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
    app.post("/api/signup", function (req, res) {
        db.Users.create({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
        })
            .then(function () {
                res.redirect(307, "/");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });



};
