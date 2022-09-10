//***** Require´s *****/
const fs = require("fs");
const path = require ("path");
const DB = require('../database/models');
const { Op } = require('sequelize');

const newsFilePath = path.join(__dirname, '../data/news.json');
const news = JSON.parse(fs.readFileSync(newsFilePath, 'utf-8'));

const New = DB.Noticia;

const newsController = {
    list: (req, res) => {
        New.findAll({
            where: {
                status: 1
            }
        })
            .then((news) => {
                res.render("newsList", { news });
            })
            .catch(err => {
                res.send(err)
            })
        
    },
    detail: (req, res) => {
        const newId = req.params.id;        
        New.findByPk(newId)
            .then(noticia => {
                res.render('newDetail', {newDetails: noticia});
            })
       
    },
    crear: (req, res) => {
        New.findAll()
            .then(noticias => {
            //console.log("🚀 ~ file: newsController.js ~ line 20 ~ noticias", noticias)
                res.render('create_news')
            })
            .catch(err => {
                res.send(err)                
            })
    },
    guardar: (req, res) => {
        //req.body
        //console.log("🚀 ~ file: newsController.js ~ line 28 ~ req.body", req.body)
        //console.log("🚀 ~ file: newsController.js ~ line 29 ~ req.file", req.file)
        New.create({
            ...req.body,   
            img: req.file.filename,         
            status: 1
        })
        .then(() => {
            res.redirect('/news/list')
        })
        .catch(err => {
            res.send(err)
        })

    },
    editar: (req, res) => {
        New.findByPk(req.params.id)
            .then(noticia => {
                res.render('edit_news', {noticia})
            })
            .catch(err => {
                res.send(err)
            })

    },
    actualizar: (req, res) => {
        console.log("🚀 ~ file: newsController.js ~ line 71 ~ req.body", req.body)
        New.update({
            ...req.body,
            
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/news/detail/' + req.params.id))
    },

    search: (req, res) => {
        const searched = req.query.search;
        New.findAll({
            where: {
                status: 1,
                title: { [Op.like] : `%${searched}%`}
            }
        })
            .then(newFinded => {
                console.log(newFinded);
                return res.status(200).json({
                    data: newFinded
                });
            })
            .catch(error => {
                return res.status(400).json({
                    message: error.message
                });
            });

    }
};

module.exports = newsController;