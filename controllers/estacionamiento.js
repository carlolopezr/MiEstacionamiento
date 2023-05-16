const { response, request } = require("express");
const { Estacionamiento } = require('../models')

const estacionamientoPost = async (req = request, res = response) => {

    const { city, commune, street, number, lat, lon, price,
        availability, description,
        restrictions, user } = req.body

    const data = {
        city,
        commune,
        street,
        number,
        lat,
        lon,
        price,
        availability,
        description,
        restrictions,
        user
    }

    const estacionamiento = new Estacionamiento(data);

    try {
        await estacionamiento.save()

    } catch (error) {
        return res.status(401).json({
            msg: error
        })
    }

    res.json({
        msg: 'Estacionamiento registrado correctamente!!'
    })


}

module.exports = {
    estacionamientoPost
}