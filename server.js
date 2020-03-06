const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});
