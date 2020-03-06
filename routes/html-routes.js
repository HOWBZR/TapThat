const path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/landing.html"));
    });

    app.get("/beer", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/beer.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/landing.html"));
    });




};