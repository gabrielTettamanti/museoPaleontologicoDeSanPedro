//***** Require´s *****/
const DB = require('../database/models');

const Subscriber = DB.Subscriber;

const subscriberController = {
    store: (req, res) => {
        Subscriber.create({
            email: req.body.emailSubscription,
            status: 1
        })
        .then(sub => {
            res.redirect('/');
        });
    },

    list: (req, res) => {
        Subscriber.findAll()
        .then(subs => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: subs.length
                },
                data: subs
            })
        });
    }
}

module.exports = subscriberController;