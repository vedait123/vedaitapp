// emailService.js
const nodemailer = require('nodemailer');

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: 'ananyareddy412@gmail.com',
    pass: 'Beautiful19'
  }
});

// Function to send email
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'ananyareddy412@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
};

module.exports = sendEmail;


// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'ana@gmail.com',
//     pass: 'Tester'
//   }
// });

// var mailOptions = {
//   from: 'ananya.amireddy@gmail.com',
//   to: 'ananyareddy412.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });