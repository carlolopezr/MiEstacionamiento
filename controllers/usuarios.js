const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const Role = require('../models/role');
const { generarJWT } = require('../helpers/generar-jwt');


const usuariosPost = async (req = request, res = response) => {

    const { name, correo, password } = req.body;
    // Instancia del usuario
    const rol = 'USER_ROLE'

    // obtener rol id
    const rol_id = await Role.findOne({ rol })
    console.log(rol_id);

    const data = {
        name,
        email: correo,
        password,
        rol: rol_id._id
    }

    const usuario = new Usuario(data);

    // Encriptar contraseña
    // 10 por defecto
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)


    //Guardar el usuario en bd
    try {
        await usuario.save()

    } catch (error) {
        return res.status(401).json({
            msg: error
        })
    }

    const token = await generarJWT(usuario._id)



    res.json({
        usuario,
        token
    });
}


module.exports = {
    usuariosPost,
}