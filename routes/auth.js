const { Router } = require('express');
const { body } = require('express-validator');


const { login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/login', [
    body('name', 'El nombre de usuario es obligatorio').not().isEmpty(),
    body('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login)

// router.post('/google', [
//     body('id_token', 'id_token es obligatorio').not().isEmpty(),
//     validarCampos
// ], googleSignIn)


module.exports = router