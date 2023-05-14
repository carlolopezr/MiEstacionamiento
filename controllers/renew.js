const { generarJWT } = require("../helpers/generar-jwt");

const revalidateToken = async (req, res = response) => {
    const usuario = req.usuario;
    const token = await generarJWT(usuario.uid)

    res.json({
        ok: true,
        token,
        usuario
    });
};


module.exports = {
    revalidateToken
}