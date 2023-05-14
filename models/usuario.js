const { Schema, model } = require('mongoose')

const usuarioSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },

    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },

    estado: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    }

})

// Sobreescribiendo el metodo para quitar la version y el password al retornar el usuario
usuarioSchema.methods.toJSON = function () {
    const { __v, password, _id, ...usuario } = this.toObject();

    usuario.uid = _id
    return usuario;
}

module.exports = model('Usuario', usuarioSchema);