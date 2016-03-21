function load(req, res){
    console.log('testing back end routing')
    res.send('back end routes working')
}

module.exports = {
    load: load,
}