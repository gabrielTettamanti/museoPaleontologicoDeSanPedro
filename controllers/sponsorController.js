
const db = require ('../database/models/index');
const {Op} = require('sequelize')

const sponsorController = {
    create: (req, res) =>{
        let adminLogged = !req.session.userAdmin == false
        res.render('create_sponsors', { adminLogged })
    },
    list: (req, res) => {
        let adminLogged = !req.session.userAdmin == false
        db.Sponsor.findAll({
            where: {
                status: 1
            }
        })
            .then((sponsors) => {
                res.render("sponsorsList", { sponsors, adminLogged });
            })
            .catch(err => res.send(err))
    },
    save: (req, res) => {    
        db.Sponsor.create({
            ...req.body,
            img: req.file.filename, 
        })
        .then(sponsor => res.redirect('/sponsors/list'))
        .catch(err => res.send(err))
    },
    detail: (req, res) => {
        let adminLogged = !req.session.userAdmin == false
        const sponsorId = req.params.id;        
        db.Sponsor.findByPk(sponsorId)
            .then(sponsor => {
                res.render('sponsorDetail', {sponsor, adminLogged});
        })
    },
    edit: (req, res) => {
        let adminLogged = !req.session.userAdmin == false
        let sponsorId = req.params.id;
        db.Sponsor.findByPk(sponsorId)
        .then(sponsor => {
            res.render('edit_sponsors', {sponsor, adminLogged});
        })
    },
    update: (req, res) => {
        let sponsorId = req.params.id;
        let image;
        if(!req.file){
            db.Sponsor.findByPk(sponsorId)
            .then(sponsor => image = sponsor.img)
        }else{
            image = req.file.filename
        }
        
        db.Sponsor.update({
                    ...req.body,
                    img: image
                }, {
                    where: {
                        id: sponsorId
                    }
                })
        .then((sponsor) => res.redirect('/sponsors/detail/'+ sponsorId))
        .catch(err => console.log(err))
    }
}

module.exports = sponsorController;