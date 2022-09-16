
function adminMiddleware (req, res, next){
    
    if(req.session.userAdmin){
        next()
    }else{
        res.locals.logged = false
        return res.redirect('/admin');
    }
}

module.exports = adminMiddleware