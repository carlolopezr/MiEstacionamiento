const { Router } = require('express');
const { body } = require('express-validator');

const { validarCampos } = require('../middlewares');
const { reservaPost } = require('../controllers/reserva');



const router = Router();

const validaciones = [
    body('name', 'El nombre es requerido').not().isEmpty(),
    body('correo', 'El correo no es válido').isEmail(),
    body('correo').custom(emailExiste),
    body('password', 'El password debe tener más de 6 caracteres').isLength({ min: 6 }),
    validarCampos]

router.post('/', reservaPost);


module.exports = router;