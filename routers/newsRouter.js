//***** Require´s  *****/
const { Router } = require('express');
const newsController = require("../controllers/newsController");

//***** Router initialization  *****/
const router = Router();

//router.get("/", newsController.list);

//***** Getting a news detail by id *****/
router.get('/detail/:id', newsController.detail);

module.exports = router;