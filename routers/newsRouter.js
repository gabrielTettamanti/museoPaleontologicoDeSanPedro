//***** Require´s  *****/
const express = require('express');
const router = express.Router();
const newsController = require("../controllers/newsController");

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware')

//router.get("/", newsController.list);

//***** Getting a news detail by id *****/
router.get('/detail/:id', newsController.detail);

router.get('/list', newsController.list)

// Crear noticia nueva
router.get('/create', newsController.crear)
router.post('/create',uploadFile.single('img'), newsController.guardar)

// Actualizar
router.get('/edit/:id', newsController.editar)
router.put('/edit/:id',uploadFile.single('img'), newsController.actualizar)

module.exports = router;