const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post("/sendMessage", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "Mail.ru",
    auth: {
      user: 'stanislav12312@mail.ru',
      pass: 'stasik123sss13'
    }
  });

  let message = {
    from: 'Sender Name <stanislav12312@mail.ru>',
    to: 'Recipient <stanislav12312@mail.ru>',
    subject: 'Вы заказали услуги трубочиста',
    text: 'Hello to myself!',
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log('Error occurred. ' + err.message);
      return process.exit(1);
    }

    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("server run!!!");
});

