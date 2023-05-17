const { response, request } = require("express");

const reservaPost = async (req = request, res = response) => {

    console.log('reserva!');
    res.json({
        msg: 'Reserva'
    })
};


module.exports = {
    reservaPost
}