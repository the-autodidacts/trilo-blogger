module.exports = function(sequelize, DataTypes) {
  var Blog = sequelize.define("Blog", {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    content: DataTypes.TEXT
  });

  Blog.associate = function(models) {
    models.Blog.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Blog;
};
