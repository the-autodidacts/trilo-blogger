var db = require('../models')
var exports = (module.exports = {});

exports.getJsonBlogs = function(req, res) {
    db.Blog.findAll({}).then(function (blogs) {
        res.json(blogs);
    })
};

exports.getBlogs = function(req,res){
    db.Blog.findAll({}).then(function (blogs) {
        res.render("index", {
            msg: "Welcome!",
            blogs: blogs
        });
    })
}