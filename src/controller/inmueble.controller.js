const inmuebleModel = require('../models/inmueble.model');

const getInmuebles = async (req, res) => {
    try {
        const inmuebles = await inmuebleModel.find();
        res.json(inmuebles);

    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const createInmueble = async (req, res) => {
    try {

        const inmueble = await inmuebleModel.create(req.body);

        res.json(inmueble);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const updateInmueble = async (req, res) => {
    try {

        const { idInmueble } = req.params;
        const result = await inmuebleModel.findByIdAndUpdate(idInmueble, req.body, { new: true });
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const deleteInmueble = async (req, res) => {
    try {

        const { idInmueble } = req.params;
        const result = await inmuebleModel.findByIdAndDelete(idInmueble, req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}


module.exports = { getInmuebles, createInmueble, updateInmueble, deleteInmueble }