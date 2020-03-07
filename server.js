const express = require("express");


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes")(app)
console.log('This is a console log');

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
// db.sequelize.sync().then(function () {
// });
