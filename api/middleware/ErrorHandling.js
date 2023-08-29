function errorHandling(err, req, res, next){
    if(err){
        let status = err.status || 500
        res.json({
            status,
            msg: 'Something went wrong, come back later!'
        })
    }
    next()
}
module.exports = errorHandling