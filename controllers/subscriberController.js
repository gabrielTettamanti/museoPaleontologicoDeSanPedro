//***** Require´s *****/
const DB = require('../database/models');

const Subscriber = DB.Subscriber;

const subscriberController = {
    store: (req, res) => {
        console.log(req.body);
        Subscriber.create({
            email: req.body.emailSubscription,
            status: 1
        })
        .then(sub => {
            res.redirect('/');
        });
    }
}

module.exports = subscriberController;