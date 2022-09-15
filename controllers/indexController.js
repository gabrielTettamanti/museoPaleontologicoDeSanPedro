const fs = require("fs");
const path = require ("path");

const sponsorsFilePath = path.join(__dirname, '../data/sponsors.json');
const sponsors = JSON.parse(fs.readFileSync(sponsorsFilePath, 'utf-8'));

const newsFilePath = path.join(__dirname, '../data/news.json');
const news = JSON.parse(fs.readFileSync(newsFilePath, 'utf-8'));


const indexController = {
    index: (req, res) => {
        let adminLogged = !req.session.userAdmin == false
        console.log(adminLogged);
        res.render("index", { listaSponsors: sponsors , news :  news , adminLogged});
    }
};

module.exports = indexController;