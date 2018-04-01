// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a user model that matches up with DB
var User = sequelize.define("user", {
  username: { 
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [5, 30]
    }
  },

  password: {   
    type: Sequelize.STRING, 
    allowNull: false,
    validate: {
      len: [8,16]
    }
  },

  imgURL: {
    type: Sequelize.STRING,
    allowNull: false
  },

  score: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  }
}, {
  timestamps:false
});



// Syncs with DB
User.sync();

module.exports = User;