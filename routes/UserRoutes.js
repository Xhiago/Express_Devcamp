const express = require('express')
const { crearUser, traerUserPorId, traerUsers, actualizarUser, deleteUser } = require('../controllers/UserController')
const router = express.Router()

//Rutas de usuario
router.route('/')
            .get(traerUsers)
            .post(crearUser)

router.route('/:id')
            .get(traerUserPorId)
            .put(actualizarUser)
            .delete(deleteUser)

//Crear rutas(endpoint, uri) para los usuarioss

//2 Crea una ruta de prueba
// router.get('/' , (request , response)=>{
//     response.send('Ruta check')
// } )

module.exports = router