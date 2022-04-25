const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmpwd: {
    type: String,
    required: true
  }
});

// Password Hashi for encryption

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmpwd = await bcrypt.hash(this.confirmpwd, 12);
  }
  next();
});

const User = mongoose.model('USER', userSchema);

module.exports = User;