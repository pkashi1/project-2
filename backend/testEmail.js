require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: 'parimalkashireddy1@gmail.com',
  subject: 'Test Email from Azure Resume App',
  text: 'If you see this, your email credentials are working!'
}, (err, info) => {
  if (err) return console.error('❌ Failed:', err);
  console.log('Success:', info.response);
});
