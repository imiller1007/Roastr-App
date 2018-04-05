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

    roaster:{
      type: DataTypes.STRING,
      allowNull: false
    },

    responder:{
      type: DataTypes.STRING,
      allowNull: false
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

  
roastTotal: {
  type: DataTypes.INTEGER,
  defaultValue: 0

},
responseTotal: {
  type: DataTypes.INTEGER,
  defaultValue: 0

}

},
{
timestamps: false


});

return Roast;
};