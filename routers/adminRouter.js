//***** Require´s *****/
const { Router } = require("express");
const adminController = require("../controllers/adminController");

//***** Router initialization *****/
const router = Router();

//***** Getting Admin view *****/
router.get('/', adminController.admin);

//***** Creating a new Admin *****/
router.post('/register', adminController.create);

//***** Getting All Admins *****/
router.get('/list', adminController.list);

//***** Getting One Admin by id *****/
router.get('/details/:id', adminController.details);

//***** Updating Admin by id *****/
router.put('/update/:id', adminController.update);

//***** Deleting Admin by id *****/
router.delete('/delete/:id', adminController.delete);

module.exports = router;