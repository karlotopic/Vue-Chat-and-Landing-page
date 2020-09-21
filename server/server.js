const express = require("express");
var nodemailer = require("nodemailer");
const bodyparser = require("body-parser");
const port = process.env.PORT || 9000;
const cors = require("cors");
require('dotenv').config({path: __dirname + '/.env'})

var app = express();

app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

var server = app.listen(port, () => {
  console.log(`Server listeing on  ${port}`);
});

// contact@gotobot.co
// sifra:
// fiyNUL9mCxloMc
// gmail account za newsletter: gotobotnews@gmail.com
// sifra: fiyNUL9mCxloMc 
// let mailerConfig = {
//   service:'gmail',
//   host:"smtp.gmail.com",
//   auth: { 
//     user: "gotobotnews@gmail.com",
//     pass: "fiyNUL9mCxloMc"
//   },


app.post("/sendMail", cors(), (req, res) => {
  const output = `
        <p>You have a new interest by: <h3> ${req.body.email} </h3> Named: ${req.body.name}</p>
        <p>The message is:
          ${req.body.message}
        </p>
    `;
  let mailerConfig = {
    host:"mail.gotobot.co",
    port: 465,
    secureConnection: true,
    auth: { 
      user: "contact@gotobot.co",
      pass: "fiyNUL9mCxloMc"
    },
    tls:{
      rejectUnauthorized: false
    }
  };
  let transporter = nodemailer.createTransport(mailerConfig);

  // send mail with defined transport object
  let info = transporter.sendMail({
    // req.body.email
    from: "contact@gotobot.co", // sender address
    to: "contact@gotobot.co", // list of receivers
    subject: "New Mail from:" + ' ' + req.body.email, // Subject line
    html: output // html body
  });
  console.log('email!')
  res.send('ok!')
});
