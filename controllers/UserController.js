//Objeto de conexion
const sequelize = require('../config/seq')
//DataTypes
const { DataTypes } = require('sequelize')
//El modelo:
const UserModel = require('../models/user')
//Crear el objeto usuario
const User = UserModel(sequelize, DataTypes)


//Get: obtener datos Read
exports.traerUsers = async(req , res) =>{
    const users = await User.findAll();
    res.status(200).json(
        {
        "succes": true,
        "data": users
        }
    )

}
//Obtener recurso por id
exports.traerUserPorId = async (req , res)=>{
    const userId = await User.findByPk(req.params.id) 
    res.status(200).json(
        {
        "succes": true,
        "data": userId
        }
    )

}
//Post: crear un nuevo recurso
exports.crearUser=async(req, res)=>{
    const newUser = await User.create(req.body);
    res.status(201).json({
        "succes": true,
        "data": newUser
    })
}
//Put o Patch: Actualizar
exports.actualizarUser = async (req, res)=>{
    //Actualizar usuario por id
    await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    //Consular datos actualizados
    const upUser = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes": true,
            "data": upUser
        }
    )
}
//Delete: Borrar un usuarios
exports.deleteUser = (req, res)=>{
    res.status(200).json(
        {
            "message": `Aqui se va a eliminar el usuarios ${req.params.id}`
        }
    )
}
