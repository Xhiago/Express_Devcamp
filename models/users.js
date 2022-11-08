'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    name: { 

      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: 'Solo se pueden poner caracteres alfabeticos, no numéricos'
        },
        notEmpty:{
          args: true,
          msg: 'Debe llenar el campo, no puede ir vacio'
        },
        notNull:{
          args: true,
          msg: 'Este campo de ser existente'
        } 
      }
     },
     email:{
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{
          args: true,
          msg: 'Email no debe quedar vacio'
        } ,
        notNull: true,
        isEmail: {
          args: true,
          msg: "email debe ser valido"
        }  
      }
      },
    password:{
      type:  DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        len:{
          args: [ 5, 10 ],
          msg: "La constraseña debe tener minimo 5 caracteres y maximo 10"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'users',
    timestamps: false
  });
  return users;
};