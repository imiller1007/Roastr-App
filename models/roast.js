module.exports = function(sequelize, DataTypes) {

var Roast = sequelize.define("roast", {


   
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

    userB: {
      allowNull: null,
      type: DataTypes.INTEGER
    },
    
    roast: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },

    response: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },

  
upVote: {
  type: DataTypes.INTEGER,
  defaultValue: 0

},
downVote: {
  type: DataTypes.INTEGER,
  defaultValue: 0

}

},
{
timestamps: false


});

return Roast;
};