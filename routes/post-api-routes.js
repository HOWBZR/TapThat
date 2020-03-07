const db = require("../models");
require('dotenv').config();
console.log(process.env.APIKEY);

const url = "https://sandbox-api.brewerydb.com/v2/beers/?key=" + process.env.APIKEY;

module.exports = function(app) {

    app.get("api/posts", function(req, res) {
        db.Post.findAll({})
            .then(function(dbPost) {
                res.json(dbPost);
            });
    }); 

app.get("/getinfo", function(req, res) {
    
})


}