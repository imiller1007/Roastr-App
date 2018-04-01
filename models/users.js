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
},

  ranking: {
  type: Sequelize.INTEGER,
  allowNull: false,

}

});

// Syncs with DB
User.sync();

module.exports = User;








// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {

//       username: {
//         type: DataTypes.STRING,
//         // AllowNull is a flag that restricts a todo from being entered if it doesn't
//         // have a text value
//         allowNull: false,
//         // len is a validation that checks that our todo is between 1 and 140 characters
//         validate: {
//           len: [1, 30]
//         }
//       },

      // password: {   
      //   type: DataTypes.STRING, 
      //   allowNull: false,
      //   validate: {
      //     len: [8,16]
      //   }
      // },

    //   score: {
    //       type: DataTypes.INTEGER,
    //       defaultValue: 0,
    //   }

    // });

//     return Todo;
//   };
  