
function adminMiddleware (req, res, next){
    res.locals.logged = false
    if(req.session.userAdmin){
        res.locals.logged = true
        next()
    }else{
        return res.redirect('/admin');
    }
}

module.exports = adminMiddleware