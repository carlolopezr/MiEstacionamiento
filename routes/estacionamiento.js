const { Router } = require('express');
const { body } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { estacionamientoPost, estacionamientosGet } = require('../controllers/estacionamiento');

const router = Router();

router.post('/', [
    body('city', 'La ciudad es obligatoria').not().isEmpty(),
    body('commune', 'La comuna es obligatoria').not().isEmpty(),
    body('street', 'La calle es obligatoria').not().isEmpty(),
    body('number', 'El número es obligatorio').not().isEmpty(),
    body('lat', 'La latitud es obligatoria').not().isEmpty(),
    body('lon', 'La longitud es obligatoria').not().isEmpty(),
    body('price', 'El precio es obligatorio').not().isEmpty(),
    body('availability', 'La disponibilidad es obligatoria').not().isEmpty(),
    body('user', 'El usuario es obligatorio').not().isEmpty(),
    validarCampos
], estacionamientoPost)

router.get('/', estacionamientosGet)


module.exports = router