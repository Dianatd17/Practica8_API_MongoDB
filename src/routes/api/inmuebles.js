const router = require('express').Router();

const InmueblesController = require('../../controller/inmueble.controller');

router.get('/', InmueblesController.getInmuebles);
router.post('/', InmueblesController.createInmueble);
router.put('/:idInmueble', InmueblesController.updateInmueble);
router.delete('/:idInmueble', InmueblesController.deleteInmueble);


module.exports = router;