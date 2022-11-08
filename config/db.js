//trer dependencia de objeto de conexion 
const sequelize = require('./seq')
const colors = require('colors')
const { connect } = require('../routes/BootcampRoutes')
//Dependencia a la funcion para crear modelo
// const UserModel = require ('../models/user')
//Dependencia a DataTypes
// const { DataTypes } = require('sequelize')

//Crear el modelo
// const User = UserModel( sequelize , DataTypes )

//Crear funcion asyncrona para conexion
const connectdb = async() =>{
    try {
        await sequelize.authenticate()
        console.log('La conexión establecida exitosamente'.bgMagenta.blue)

    } catch (error) {
        console.error(error)
    }
}

//Ejecutar la conexión 
// connectdb()

module.exports = connectdb

//este archivo es solo para conectar