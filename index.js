const fs = require('fs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var mailAccountUser = 'kishanpneosoft@gmail.com'
var mailAccountPassword = 'ssahmscucvefpgdr'

var fromEmailAddress = 'kishanpneosoft@gmail.com'
var toEmailAddress = 'kishanpneosoft@gmail.com'

var transport = nodemailer.createTransport(smtpTransport({
    // service: 'gmail',
    // auth: {
    //     user: mailAccountUser,
    //     pass: mailAccountPassword
    // }

    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: mailAccountUser,
        pass: mailAccountPassword
    }
    
    
    ,
    tls: {
        rejectUnauthorized: false
    }
}))





fs.readFile('./templates/forgotpassword.html', 'utf8', function (err, content) {
if (err) {
  console.log('sendEmail err', err);
}
content = content.replace('$user_name$', 'KishanKumar');
content = content.replace('#urlisqeni#', 'KishUrl');
content = content.replace('$user_code$', '3456');


var mail = {
    from: fromEmailAddress,
    to: toEmailAddress,
    subject: "Change Password",
    text: content,
    html: content,
    attachments:[{
        filename : 'logo.png',
        path: 'templates/img/logo.png',
        cid : 'image1@johnson.com'
    },
    {
        filename : 'logo.png',
        path: 'templates/img/logo.png',
        cid : 'image2@johnson.com'
    },
    {
        filename : 'logo.png',
        path: 'templates/img/logo.png',
        cid : 'image3@johnson.com'
    },
    {
        filename : 'logo.png',
        path: 'templates/img/logo.png',
        cid : 'image4@johnson.com'
    },
    {
        filename : 'logo.png',
        path: 'templates/img/logo.png',
        cid : 'image5@johnson.com'
    },
    {
        filename : 'logo.png',
        path: 'templates/img/logo.png',
    }]
}

transport.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: ");
    }

    transport.close();
});

});