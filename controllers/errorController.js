const fs = require("fs");
const path = require ("path");


const newsFilePath = path.join(__dirname, '../data/news.json');
const news = JSON.parse(fs.readFileSync(newsFilePath, 'utf-8'));


const errorController = {
    error: (req, res) => {
        res.render("error", {news :  news});
    }
};

module.exports = errorController;