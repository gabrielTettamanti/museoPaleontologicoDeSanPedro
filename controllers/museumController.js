const fs = require("fs");
const path = require ("path");

const newsFilePath = path.join(__dirname, '../data/news.json');
const news = JSON.parse(fs.readFileSync(newsFilePath, 'utf-8'));

const museumController = {
    tour: (req, res) => {
        let adminLogged = !req.session.userAdmin == false
        res.render("museumTour", {news, adminLogged});
    },
    visit: (req, res) => {
        let adminLogged = !req.session.userAdmin == false
        res.render("countryside", { adminLogged });
    }
};

module.exports = museumController;