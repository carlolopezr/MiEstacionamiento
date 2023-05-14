const { Router } = require('express');

const { validarJWT } = require('../middlewares')

const { revalidateToken } = require('../controllers/renew');


const router = Router();

router.get('/', validarJWT, revalidateToken);


module.exports = router;