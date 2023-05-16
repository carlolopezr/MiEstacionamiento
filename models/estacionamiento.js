const { Schema, model } = require('mongoose');

const EstacionamientoSchema = Schema({

    city: {
        type: String,
        required: true
    },

    commune: {
        type: String,
        required: true
    },

    street: {
        type: String,
        required: true
    },

    number: {
        type: String,
        required: true
    },

    lat: {
        type: String,
        required: true
    },

    lon: {
        type: String,
        required: true
    },

    description: String,

    price: {
        type: String,
        required: true
    },

    restrictions: String,

    availability: [
        {
            day: {
                type: String,
                required: true
            },
            slots: [
                {
                    startTime: {
                        type: String,
                        required: true
                    },
                    endTime: {
                        type: String,
                        required: true
                    }
                }
            ]
        }
    ],

    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

})

module.exports = model('Estacionamiento', EstacionamientoSchema);
