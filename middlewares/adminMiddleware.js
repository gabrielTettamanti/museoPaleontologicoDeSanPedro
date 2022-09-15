
function adminMiddleware (req, res, next){
    
    if(req.session.userAdmin){
        next()
    }else{
        res.locals.logged = false
        return res.render('admin');
    }
}

module.exports = adminMiddleware