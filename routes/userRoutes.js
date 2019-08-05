var db = require("../models");
var authController = require("../controllers/authController");
module.exports = function(app) {
  // Render 404 page for any unmatched routes
  app.get("/users", function(req, res) {
    db.User.findAll({}).then(function(users) {
      res.render("users", {
        users: users
      });
    });
  });

  app.post("/users", function(req, res) {
    db.User.create(req.body).then(function(user) {
      res.json(user);
    });
  });

  app.get("/users/new", authController.signup);
  app.get("/signin", authController.signin);
};
