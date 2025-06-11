const mongoose = require('mongoose');
const newsletterSubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscriptionDate: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});
module.exports = mongoose.model('NewsletterSubscriber', newsletterSubscriberSchema);
