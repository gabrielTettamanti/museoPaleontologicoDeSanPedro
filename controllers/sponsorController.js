
const db = require ('../database/models/index');
const {Op} = require('sequelize')

const sponsorController = {
    create: (req, res) =>{
        res.render('create_sponsors')
    },
    list: (req, res) => {
       
        db.Sponsor.findAll({
            where: {
                status: 1
            }
        })
            .then((sponsors) => {
                res.render("sponsorsList", { sponsors });
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
        const sponsorId = req.params.id;        
        db.Sponsor.findByPk(sponsorId)
            .then(sponsor => {
                res.render('sponsorDetail', {sponsor});
        })
    },
    edit: (req, res) => {
        let sponsorId = req.params.id;
        db.Sponsor.findByPk(sponsorId)
        .then(sponsor => {
            res.render('edit_sponsors', {sponsor});
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