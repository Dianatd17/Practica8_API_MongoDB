const getInmuebles = (req, res) => {
    res.json('GET');
}

const createInmueble = (req, res) => {
    res.json('POST');
}

const updateInmueble = (req, res) => {
    res.json('PUT');
}

const deleteInmueble = (req, res) => {
    res.json('DELETE');
}


module.exports = { getInmuebles, createInmueble, updateInmueble, deleteInmueble }