const path = require("path");

module.exports = function (app) {
    
    app.get("/", function (app) {
        res.sendFile(path.join(__dirname, "..public/landing.html"))
    });

    app.get("/", function (app) {
        res.sendFile(path.join(__dirname, "..public/landing.html"))
    });

    app.get("/", function (app) {
        res.sendFile(path.join(__dirname, "..public/landing.html"))
    });

};