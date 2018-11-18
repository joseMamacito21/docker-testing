const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: { type: String,  required: true },
  email: { type: String, required: true },
  active: { type: Boolean, default: false },
  isAuthenticated: { type: Boolean, default: false },
  modules: { type: [String], required: true },
  password: { type: String, required: true },
  monthlyPayment: { type: Number },
});

module.exports = Client = mongoose.model('client', ClientSchema);