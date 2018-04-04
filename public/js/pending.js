module.exports = function(sequelize, DataTypes) {
    var Roast = sequelize.define("Roast", {
      // Giving the Author model a name of type STRING
      userid2: DataTypes.STRING
    });
  
    Roast.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Users.hasMany(models.Roast, {
        onDelete: "cascade"
      });
    };
  
    return Author;
  };