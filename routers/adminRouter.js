//***** Require´s *****/
const { Router } = require("express");
const adminController = require("../controllers/adminController");
const adminMiddleware = require('../middlewares/adminMiddleware')

//***** Router initialization *****/
const router = Router();

//***** Getting Admin view *****/
router.get('/', adminController.admin);


//***** Admin Login *****/
router.post('/login', adminController.login);


//***** Admin Logout *****/
router.post('/logout', adminController.logout)

//***** Creating a new Admin *****/
router.get('/register', adminMiddleware, adminController.createForm);
router.post('/register', adminController.create);

//***** Getting All Admins *****/
router.get('/list', adminMiddleware, adminController.list);

//***** Getting One Admin by id *****/
router.get('/details/:id', adminMiddleware, adminController.details);

//***** Updating Admin by id *****/
router.get('/update/:id', adminMiddleware, adminController.editForm);
router.put('/update/:id', adminController.update);

//***** Deleting Admin by id *****/
router.delete('/delete/:id', adminController.delete);

module.exports = router;