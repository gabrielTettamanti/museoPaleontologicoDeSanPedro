const fs = require("fs");
const path = require ("path");

const newsFilePath = path.join(__dirname, '../data/news.json');
const news = JSON.parse(fs.readFileSync(newsFilePath, 'utf-8'));

const museumController = {
    list: (req, res) => {
        res.render("museumTour", {news});
    }
};

module.exports = museumController;