var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

console.log("port: %s", process.env.PORT)

var server = app.listen(process.env.PORT, function () {
    console.log("Listening on port %s...", server.address().port);
});