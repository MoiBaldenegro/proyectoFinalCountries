const { DataTypes } = require("sequelize");


module.exports = (Sequelize)=> {
    Sequelize.define( "User", {

    id: { 
        type : DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        initialAutoIncrement: 50016001
        
    },
    username:{
        type : DataTypes.STRING,
        allowNull : false,
        unique: true
    },
    email : { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        unique: true,
        isEmail: true
    },
    password:{
        type : DataTypes.STRING,
        allowNull: false
    }

    },
    
     { timestamps : false,})
};