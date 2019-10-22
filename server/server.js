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
app.use(bodyParser.json());

app.post("/sendMessage", (req, res) => {
  let user = req.body;
  let transporter = nodemailer.createTransport({
    service: "Gmail.com",
    auth: {
      user: 'chistim911@gmail.com',
      pass: '13252011leka'
    }
  });

  let message = {
    from: 'Sender Name <stanislav12312@mail.ru>',
    to: 'Recipient <stanislav12312@mail.ru>',
    subject: user.name + ' заказал услуги трубочиста',
    text: 'Пользователь ' + user.name + ' (' + user.email + ') отправил сообщение в форме "Обратная связь": ' + user.mes + ' Телефон: ' + user.phone,
    html: 'Пользователь <strong>' + user.name + ' (' + user.email + ')</strong> отправил сообщение в форме "Обратная связь": <br>' + user.mes + '<br>Телефон: ' + user.phone
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

