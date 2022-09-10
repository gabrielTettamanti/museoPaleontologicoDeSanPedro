//***** Require´s  *****/
const express = require('express');
const router = express.Router();
const sponsorController = require("../controllers/sponsorController");

// Middlewares
const uploadSponsor = require('../middlewares/multerSponsorMiddleware')


//ver lista de sponsors
router.get('/list', sponsorController.list)

// // Crear sponsor nuevo
router.get('/create', sponsorController.create)
router.post('/create',uploadSponsor.single('img'), sponsorController.save)

//***** ver detalles del sponsor *****/
router.get('/detail/:id', sponsorController.detail);

// Actualizar sponsor
router.get('/edit/:id', sponsorController.edit)
router.post('/edit/:id',uploadSponsor.single('img'), sponsorController.update)


module.exports = router;