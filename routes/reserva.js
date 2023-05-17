const { Router } = require('express');
const { body } = require('express-validator');

const { reservaPost } = require('../controllers/reserva');



const router = Router();

router.post('/', reservaPost);


module.exports = router;