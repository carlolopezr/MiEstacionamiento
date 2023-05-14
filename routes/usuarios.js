const { Router } = require('express');
const { body } = require('express-validator');

const { validarCampos, validarJWT } = require('../middlewares')

const { usuariosPost } = require('../controllers/usuarios');

const { emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');


const router = Router();

const validaciones = [
    body('nombre', 'El nombre es requerido').not().isEmpty(),
    body('correo', 'El correo no es válido').isEmail(),
    body('correo').custom(emailExiste),
    body('password', 'El password debe tener más de 6 caracteres').isLength({ min: 6 }),
    // body('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE'])
    body('rol').custom(esRoleValido),
    validarCampos]

router.post('/', validaciones, usuariosPost);


module.exports = router;