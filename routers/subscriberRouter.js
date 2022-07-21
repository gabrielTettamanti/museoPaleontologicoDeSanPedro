//***** Require´s *****/
const { Router } = require('express');
const subscriberController = require('../controllers/subscriberController');

//***** Router initialization *****/
const subsRouter = Router();

//***** Getting all subscribers *****/
subsRouter.get('/', subscriberController.list);

//***** Creating a new subscriber *****/
subsRouter.post('/add', subscriberController.store);

module.exports = subsRouter;