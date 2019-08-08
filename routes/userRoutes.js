var authController = require("../controllers/authController");
var userController = require("../controllers/userController")
module.exports = function(app) {

  app.get("/users", userController.getUsers);
  app.post("/users", userController.createUser);

  app.get("/users/new", authController.signup);
  app.get("/signin", authController.signin);
};
