// Dependencies
// =============================================================


// Creates a user model that matches up with DB
module.exports = function(sequelize, DataTypes) {
var User = sequelize.define("user", {
  username: { 
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [5, 30]
    }
  },

  password: {   
    type: DataTypes.STRING, 
    allowNull: false,
    validate: {
      len: [8,16]
    }
  },

  imgURL: {
    type: DataTypes.STRING,
    allowNull: false
  },

  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
}, {
  timestamps:false
});

  return User;
};
