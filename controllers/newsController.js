const fs = require("fs");
const path = require ("path");

const newsFilePath = path.join(__dirname, '../data/news.json');
const news = JSON.parse(fs.readFileSync(newsFilePath, 'utf-8'));

const newsController = {
    list: (req, res) => {
        res.render("newsList", { news });
    },
    detail: (req, res) => {
        const newId = req.params.id;
        const details = news.find(museumNew => museumNew.id == newId);
        res.render('newDetail', {newDetails: details});
    }
};

module.exports = newsController;