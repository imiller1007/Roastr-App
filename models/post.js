
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// grabbing the data from the database
// Creates a "Roast" model that matches up with DB
// 
var Roast = sequelize.define("roast", {
  
  post: {

    roastid: {
      userid1: {
        type: DataTypes.INTEGER,
        allowNull: false

      },

      userid2: {
        type: DataTypes.INTEGER,
        allowNull: false

      },

      userA: {
        type: DataTypes.STRING,
        allowNull: false
      },

      userB: {ING,
        allowNull: false,
        type: DataTypes.INTEGER
      },
      
      roast: { 
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      },

      response: { 
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      },

    }, // closes
    
  upVote: {
    type: DataTypes.INTEGER,
    allowNull: false
   
  },
  downVote: {
    type: DataTypes.INTEGER,
    allowNull: false
   
  },

  }

  
}, 

{
  timestamps: false
});

// Syncs with DB
// will synch with database and create the table if it doesnt exist
Roast.sync();

// Makes the Roast Model available for other files (will also create a table)
// imports files
module.exports = Roast;
