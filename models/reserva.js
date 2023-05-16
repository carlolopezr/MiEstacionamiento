

const { Schema, model } = require('mongoose');

const ReservaSchema = Schema({
    reservedSlots: [
        {
            day: {
                type: String,
                required: true
            },
            startTime: {
                type: String,
                required: true
            },
            endTime: {
                type: String,
                required: true
            },

            date: Number
        }
    ],

    estacionamiento: {
        type: Schema.Types.ObjectId,
        ref: 'Estacionamiento',
        required: true
    }
})

module.exports = model('Reserva', ReservaSchema);


