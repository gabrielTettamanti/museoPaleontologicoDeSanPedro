//***** Require´s *****/
const DB = require('../database/models');
const nodemailer = require("nodemailer");

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
    },

    emails: (req, res) => {
        let adminLogged = !req.session.userAdmin == false
        res.render('emails', { adminLogged })
    },

    send: async (req, res) => {
        try {
            let allSubscribers = await Subscriber.findAll()
            let arrSubscribers = allSubscribers.map(element => element.dataValues.email)
            
            let affair = req.body.affair
            let title = req.body.title
            let message = req.body.message
            let introduction = req.body.introduction
        
        
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                user: 'noreply.gcfsanpedro@gmail.com', // generated ethereal user
                pass: 'dzhfeyaxvontgcvg', // generated ethereal password
                },
            });
            
            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Museo Paleontologico de San Pedro" <noreply.gcfsanpedro@gmail.com>', // sender address
                to: arrSubscribers, // list of receivers
                subject: affair, // Subject line
                html: 
                `<div><h1>${title}</h1><p>${introduction}</p><br/><p>${message}</p></div>`, // html body
            });
            res.send('mensaje enviado ')
        } catch (error) {
            console.log(error)
            res.send('No se envio el mensaje')
        }
        
    }
}

module.exports = subscriberController;

