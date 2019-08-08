var blogController = require('../controllers/blogController')
var db = require("../models");

module.exports = function(app) {
  // Load index page will all blogs
  app.get("/blogs", blogController.getBlogs);

  // Get all blogs
  app.get("/api/blogs", blogController.getJsonBlogs)

  // Create a new blog
  app.post("/blogs", function(req, res) {
    db.Blog.create(req.body).then(function(blog) {
      res.json(blog);
    });
  });

  // Delete an blog by id
  app.delete("/blogs/:id", function(req, res) {
    db.Blog.destroy({ where: { id: req.params.id } }).then(function(blog) {
      res.json(blog);
    });
  });

  // Load blog page and pass in a blog by id
  app.get("/blogs/:id", function(req, res) {
    db.Blog.findOne({ where: { id: req.params.id } }).then(function(blogs) {
      res.render("blog", {
        blogs: blogs
      });
    });
  });
};
