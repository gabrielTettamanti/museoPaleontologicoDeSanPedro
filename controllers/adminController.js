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
        res.render("admin", {news :  news});
    },

    create: (req, res) => {
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
            return res.status(200).json({
                meta: {
                    status: 200,
                    message: 'Admin updated'
                },
                data: admin
            });
        });
    }
};

module.exports = adminController;