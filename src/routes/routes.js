var status = require("../status")

var appRouter = function(app) {
    app.get("/", function(req, res) {
        res.send("Hello World");
    });
    app.get("/status", function(req, res) {
        res.send( status.getStatus());
    });
}

module.exports = appRouter;