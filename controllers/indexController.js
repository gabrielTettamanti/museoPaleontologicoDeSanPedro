const fs = require("fs");
const path = require ("path");

const db = require ('../database/models/index');
const {Op} = require('sequelize')



const indexController = {
    index: (req, res) => {
   
        let adminLogged = !req.session.userAdmin == false

        let news = db.Noticia.findAll({
            where: {
                status: 1
            }
        })

        let sponsors =  db.Sponsor.findAll({
            where: {
                status: 1
            }
        })
        Promise.all([news, sponsors])
            .then(([dataNews, dataSponsors]) => {
                res.render("index", { listaSponsors: dataSponsors, news :  dataNews, adminLogged });
            })
            .catch(err => res.send(err))
    }
};

module.exports = indexController;