
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// grabbing the data from the database
// Creates a "Vote" model that matches up with DB
// 
var Votes = sequelize.define("vote", {
  username: {
    type: DataTypes.STRING,
    allowNull: false
//not sure how to call this from the database 
  },
  postid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

 score: {
    type: DataTypes.INTEGER,
    allowNull: false
//    
  }
}, 

{
  timestamps: false
});

// Syncs with DB
// will synch with database and create the table if it doesnt exist
Vote.sync();

// Makes the Vote Model available for other files (will also create a table)
// imports files
module.exports = Vote;