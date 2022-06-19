const fs = require("fs");
const path = require ("path");

const sponsorsFilePath = path.join(__dirname, '../data/sponsors.json');
const sponsors = JSON.parse(fs.readFileSync(sponsorsFilePath, 'utf-8'));

const indexController = {
    index: (req, res) => {
        res.render("index", { listaSponsors: sponsors });
    }
};

module.exports = indexController;