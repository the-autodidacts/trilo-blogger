var db = require("../models");
var exports = (module.exports = {});

exports.getUsers = function (req, res) {
    db.User.findAll({}).then(function (users) {
        res.render("users", {
            users: users
        });
    });
}

exports.createUser = function (req, res) {
    db.User.create(req.body).then(function (user) {
        res.json(user);
    })
};