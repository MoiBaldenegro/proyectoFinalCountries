const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id : {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue:  DataTypes.UUIDV4,
      allowNull : true,
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
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
        type : DataTypes.STRING,
        allowNull : false
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