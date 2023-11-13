const { Schema, model } = require('mongoose');

const inmuebleSchema = new Schema({
    // piso: String,
    piso:
    {
        type: String,
        required: [true, 'El piso es necesario'],
        maxlength: [6, 'El piso no puede exceder los 6 caracteres'],
        minlength: [1, 'El piso debe contener entre 1 y 6 caracteres']
    },
    letra: {
        type: String,
        default: '',
    },
    extensionM2: {
        type: Number,
        integer: true,
        cast: 'La extensionM2 requiere un número y {VALUE} no es un número',
    },
    numeroHabitaciones: {
        type: Number,
        default: 1,
        cast: 'El numeroHabitaciones requiere un número y {VALUE} no es un número',
        integer: [true, 'El número de habitaciones es necesario'],
        min: [1, 'El número de habitaciones es necesario'],
        max: [15, 'El número maximo de habitaciones es 15'],
        required: true,
    },
    alquilado: {
        type: Boolean,
        default: false,
    },
    nombrePropietario: {
        type: String,
        required: [true, 'El nombre del propietario es necesario'],
        maxlength: [80, 'El nombre del propietario no puede exceder los 80 caracteres'],
    },
    mailContacto: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    }
}, {
    versionKey: false,
    timestamps: true
}
);


module.exports = model('Inmueble', inmuebleSchema);