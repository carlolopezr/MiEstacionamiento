const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const Role = require('../models/role');


const usuariosPost = async (req = request, res = response) => {

    const { name, correo, password, rol = 'USER_ROLE' } = req.body;
    // Instancia del usuario

    // obtener rol id
    const rol_id = await Role.findOne({ rol })

    const usuario = new Usuario({ name, correo, password, rol_id });

    // Encriptar contraseña
    // 10 por defecto
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)

    // Guardar el usuario en bd
    try {
        await usuario.save()
    } catch (error) {
        console.log(error + 'AQUI ESTA');
    }

    res.json({
        usuario
    });
}


module.exports = {
    usuariosPost,
}