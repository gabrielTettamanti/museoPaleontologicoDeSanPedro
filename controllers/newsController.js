const fs = require("fs");
const path = require ("path");
const db = require('../database/models')

const newsFilePath = path.join(__dirname, '../data/news.json');
const news = JSON.parse(fs.readFileSync(newsFilePath, 'utf-8'));

const newsController = {
    list: (req, res) => {
        db.Noticia.findAll({
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
        db.Noticia.findByPk(newId)
            .then(noticia => {
                res.render('newDetail', {newDetails: noticia});
            })
       
    },
    crear: (req, res) => {
        db.Noticia.findAll()
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
        db.Noticia.create({
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
        db.Noticia.findByPk(req.params.id)
            .then(noticia => {
                res.render('edit_news', {noticia})
            })
            .catch(err => {
                res.send(err)
            })

    },
    actualizar: (req, res) => {
        console.log("🚀 ~ file: newsController.js ~ line 71 ~ req.body", req.body)
        db.Noticia.update({
            ...req.body,
            
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/news/detail/' + req.params.id))
    }
};

module.exports = newsController;