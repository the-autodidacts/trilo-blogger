var db = require("../models");
module.exports = function(app) {
  // Render 404 page for any unmatched routes
  app.get("/", function(req, res) {
    db.Blog.findAll({
      limit: 10,
      order: [["createdAt", "DESC"]]
    }).then(function(blogs) {
      res.render("welcome", {
        blogs: blogs
      });
    });
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
