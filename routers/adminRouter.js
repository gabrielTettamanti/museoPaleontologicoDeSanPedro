//***** Require´s *****/
const { Router } = require("express");
const adminController = require("../controllers/adminController");

//***** Router initialization *****/
const router = Router();

//***** Getting Admin view *****/
router.get('/', adminController.admin);

//***** Creating a new Admin *****/
router.post('/register', adminController.create);


module.exports = router;