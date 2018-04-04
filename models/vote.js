
module.exports = function(sequelize, DataTypes) {

var Votes = sequelize.define("vote", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
   
    },
    postid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
   score: {
      type: DataTypes.INTEGER,
      allowNull: false
   
    }
  }, 
  {
    timestamps: false
  });

  return Votes;
};

