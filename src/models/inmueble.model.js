const { Schema, model } = require('mongoose');

const inmuebleSchema = new Schema({
    piso: String,
    letra: String,
    extensionM2: Number,
    numeroHabitaciones: Number,
    alquilado: Boolean,
    nombrePropietario: String,
    mailContacto: String
}, {
    versionKey: false,
    timestamps: true
}
);


module.exports = model('Inmueble', inmuebleSchema);