//***** Require´s *****/
const fs = require("fs");
const path = require ("path");
const DB = require('../database/models');
const bcrypt = require('bcryptjs');

//***** Salt generation *****/
const salt = bcrypt.genSaltSync(10);

const newsFilePath = path.join(__dirname, '../data/news.json');
const news = JSON.parse(fs.readFileSync(newsFilePath, 'utf-8'));

const Admin = DB.Admin;

const adminController = {
    admin: (req, res) => {
        let adminLogged = !req.session.userAdmin == false
        res.locals.logged = req.session.userAdmin ? true : false

        const newsList = DB.Noticia.findAll()
        const sponsorsList = DB.Sponsor.findAll()
        const adminList = DB.Admin.findAll()

        Promise.all([newsList, sponsorsList, adminList])
        .then(([newsList, sponsorsList, adminList]) => {
            res.render("admin", { newsList, sponsorsList, adminList, adminLogged });
        })
    },

    logout: (req, res) => {
		req.session.destroy();
		return res.redirect('/');
    },

    createForm: (req, res) => {
        let adminLogged = !req.session.userAdmin == false
        res.render('create_admin', { adminLogged });
    },

    create: (req, res) => {
        console.log(req.body)
        const passwordEncrypted = bcrypt.hashSync(req.body.password, salt);
        Admin.create({
            email: req.body.email,
            password: passwordEncrypted,
            password_conf: passwordEncrypted,
            status: 1
        })
        .then(admin => {
            res.redirect('/admin');
        });
    }, 

    list: (req, res) => {
        Admin.findAll()
        .then(admins => {
            return res.status(200).json({
                meta: {
                    status: 200,
                    total: admins.length
                },
                data: admins
            });
        });
    },

    details: (req, res) => {
        const adminId = req.params.id;
        Admin.findByPk(adminId)
        .then(admin => {
            return res.status(200).json({
                meta: {
                    status: 200
                },
                data: admin
            });
        });
    },

    editForm: (req, res) => {
        let adminId = req.params.id;
        Admin.findByPk(adminId)
        .then(admin => {
            res.render('edit_admin', { admin });
        })
    },

    update: (req, res) => {
        const passwordEncrypted = bcrypt.hashSync(req.body.password, salt);
        const adminId = req.params.id;
        const adminUpdated = {
            password: passwordEncrypted,
            password_conf: passwordEncrypted
        }
        Admin.update(adminUpdated, {
            where: {id: adminId}
        })
        .then(admin => {
            // return res.status(200).json({
            //     meta: {
            //         status: 200,
            //         message: 'Admin updated'
            //     },
            //     data: admin
            // });
            res.redirect('/admin')
        });
    },

    delete: (req, res) => {
        const adminId = req.params.id;
        const adminUpdated = {
            status: 0
        }
        Admin.update(adminUpdated, {
            where: {id: adminId}
        })
        .then(admin => {
            return res.status(200).json({
                meta: {
                    status: 200,
                    message: 'Admin deleted'
                }
            });
        });
    },

    login: (req, res) => {
        const { email, password } = req.body;

        Admin.findOne({
            where: {
                status: 1,
                email: email
            }
        })
        .then(admin => {
            if(admin != null) {
                
                if(bcrypt.compareSync(password, admin.password)) {
                    req.session.userAdmin = admin.dataValues;
                    res.locals.logged = true
                    res.redirect('/');
                }
            } 
            res.render('admin');
        })
        .catch(error => {
            console.log(error);
        })
    }
};

module.exports = adminController;