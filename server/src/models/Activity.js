const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id : {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue :  DataTypes.UUIDV4,
      allowNull : false
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
    difficulty: {
      type : DataTypes.INTEGER,
      validate: { min : 1, max : 5},
      allowNull: false
    },
    duration : {
      type : DataTypes.INTEGER(2)
  
    },
    season :{ 
      type : DataTypes.JSON,
      allowNull : false
    },
    });
};