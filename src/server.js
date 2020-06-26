const nodemailer = require('nodemailer');
const creds = require('./configure');

let transport = {
  host: 'your_host_here', // e.g. smtp.gmail.com
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

app.use(express.json()); app.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.messageHtml
  
  
    var mail = {
      from: name,
      to: 'http://localhost:3000/send/venkateswara.kolli@gmail.com',  
      subject: 'Contact form request',
  
      html: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })