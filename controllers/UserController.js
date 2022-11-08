//Objeto de conexion
const sequelize = require('../config/seq')
//DataTypes
const { DataTypes, ValidationError } = require('sequelize')
//El modelo:
const UserModel = require('../models/users')
//Crear el objeto usuario
const User = UserModel(sequelize, DataTypes)


//Get: obtener datos Read
exports.traerUsers = async(req , res) =>{
    try {
        const users = await User.findAll();
        res.status(200).json(
            {
            "succes": true,
            "data": users
            }
        )
    } catch (error) {
        res
        .status(500)
        .json({
            "success": false,
            "errors": "Error del servidor"
        })
    }

}
//Obtener recurso por id
exports.traerUserPorId = async (req , res)=>{
    try {
    const userId = await User.findByPk(req.params.id) 
    //Si usuario no existe
    if(!userId){
        return res.status(422).json(
            {
            "succes": false,
            "errors":[
                "Usuario no existe"
            ]
            }
        )
    }
    return res.status(200).json(
        {
        "succes": true,
        "data": userId
        }
    )
    } catch (error) {
        return res
            .status(500)
            .json({
                "success": false,
                "errors": "Error del servidor"
            })
    }

}
//Post: crear un nuevo recurso
exports.crearUser=async(req, res)=>{
    try {
        const newUser = await User.create(req.body);
        //Llevar errores a response 
        res.status(201).json({
            "succes": true,
            "data": newUser
        })
    } catch (error) {
        //Poner los mensajes de error unicamente¿
        if (error instanceof ValidationError){
            res
            .status(422)
            .json({
                "success": false,
                "errors": error.errors.map((e)=> e.message )
            })
        }else{
            res
            .status(500)
            .json({
                "success": false,
                "errors": "Error del servidor"
            })
        }

    }
  
}
//Put o Patch: Actualizar
exports.actualizarUser = async (req, res)=>{
    try {
        //consultar datos actualizados
      const upUser = await User.findByPk(req.params.id)
      if(!upUser){
        //response de usuario no encontrado
        res.status(422).json(
            {
                "success": false,
                "errors": [
                    "usuario no existe"
                ]  
            }
           )   
       }else{
            //actualizar usuario por id
            await User.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const userAct = await User.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  userAct
            })
       }
    } catch (error) {
        res
        .status(500)
        .json({
             "success": false, 
             "errors":  "error de servidor"  
        })
    }
 }
//Delete: Borrar un usuarios
exports.deleteUser = (req, res)=>{
    res.status(200).json(
        {
            "message": `Aqui se va a eliminar el usuarios ${req.params.id}`
        }
    )
}

