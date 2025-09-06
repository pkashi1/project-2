const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendJobApplicationEmail({ name, email, phone, position, experience, message, resumeName, sasUrl }) {
  const html = `
    <h2>New Job Application for: ${position}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Message:</strong><br>${message || 'N/A'}</p>
    <p><strong>Resume:</strong> <a href="${sasUrl}" target="_blank">${resumeName}</a> (valid for 7 days)</p>
  `;

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    // to: 'kasiparimal@gmail.com',
    to:'srikanthbangaru.lsu@gmail.com',
    subject: `Application for ${position} – ${name}`,
    html,
  });
}

module.exports = { sendJobApplicationEmail };
