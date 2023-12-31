const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id : {
      type : DataTypes.STRING(3),
      
      allowNull : false,
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      primaryKey : true,
    },
    flag : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    continent : {
      type : DataTypes.STRING,
      allowNull : false
    },
    capital : {
        type : DataTypes.STRING
    },
    subregion : {
      type : DataTypes.STRING
    },
    area : {
      type : DataTypes.STRING
    },
    population : {
      type : DataTypes.INTEGER,
      allowNull :  false
    }

  });
};