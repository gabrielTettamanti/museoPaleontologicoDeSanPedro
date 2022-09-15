//***** Require´s  *****/
const express = require('express');
const router = express.Router();
const newsController = require("../controllers/newsController");

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware')
const adminMiddleware = require('../middlewares/adminMiddleware');
const { admin } = require('../controllers/adminController');

//router.get("/", newsController.list);

//***** Searching news *****/
router.get('/search', newsController.search);

//***** Getting a news detail by id *****/
router.get('/detail/:id', newsController.detail);

router.get('/list', newsController.list)

// Crear noticia nueva
router.get('/create', adminMiddleware, newsController.crear)
router.post('/create',uploadFile.single('img'), newsController.guardar)

// Actualizar
router.get('/edit/:id', adminMiddleware, newsController.editar)
router.put('/edit/:id',uploadFile.single('img'), newsController.actualizar)

module.exports = router;