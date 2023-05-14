const { generarJWT } = require("../helpers/generar-jwt");

const revalidateToken = async (req, res = response) => {
    const usuario = req.usuario;
    console.log(usuario);
    const token = await generarJWT(usuario._id)

    res.json({
        ok: true,
        token,
        usuario
    });
};


module.exports = {
    revalidateToken
}