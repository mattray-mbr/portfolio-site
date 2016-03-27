var sendgrid = require("sendgrid")("");
var emails = require('../models/emailSchema.js')
var email = new sendgrid.Email();

function sendEmail(req, res){
    console.log(req.body)
    email.addTo("mattray.apex@gmail.com");
    email.setFrom(req.body.email);
    email.setSubject(req.body.name);
    email.setHtml(req.body.message);
    sendgrid.send(email, function(err, doc){
        if(err){res.send('oops, something went wrong, please try again later')}
        res.send('your email was sent successfully') 
    });
}

function load(req, res){
    console.log('testing back end routing')
    res.send('back end routes working')
}

module.exports = {
    load      : load,
    sendEmail : sendEmail,
}