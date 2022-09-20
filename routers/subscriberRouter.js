//***** Require´s *****/
const { Router } = require('express');
const subscriberController = require('../controllers/subscriberController');
const adminMiddleware = require('../middlewares/adminMiddleware')

//***** Router initialization *****/
const subsRouter = Router();

//***** Getting all subscribers *****/
subsRouter.get('/', adminMiddleware, subscriberController.list);

//***** Creating a new subscriber *****/
subsRouter.post('/add', subscriberController.store);

subsRouter.get('/emails', subscriberController.emails);

subsRouter.post('/emails', subscriberController.send);

module.exports = subsRouter;