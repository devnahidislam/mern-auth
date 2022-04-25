const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/userSchema');

// Middleware
const middleware = (req, res, next) => {
  console.log(`user Auth checking`);
  next();
}

router.get('/', (req, res) => {
  res.send("Congratulation! It's Express backend. From 5000")
});
router.get('/about', middleware, (req, res) => {
  res.send("About Page")
});
router.get('/contact', (req, res) => {
  res.send("contact page")
});

router.post('/register', async (req, res) => {
  const { name, email, phone, profession, password, confirmpwd } = req.body;

  if (!name || !email || !phone || !profession || !password || !confirmpwd) {
    return res.status(422).json({ error:"All field are required."});
  }
  try {
    const userExist = await User.findOne({ email });
    
    if (userExist) {
      return res.status(422).json({ error: "Email Already Exist." });
    } else if (password != confirmpwd) {
      return res.status(422).json({ error: "Password didn't match." });
    } else {
      const user = new User({ name, email, phone, profession, password, confirmpwd });
      await user.save();
    }

    res.status(201).json({ message: "Registration Successfully Done." });
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Invalid Request" });
    }

    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);
    const isMatch = await bcrypt.compare(password, userLogin.password);
    if (isMatch) {
      res.status(201).json({ message: "Login Successfully" });
    } else {
      res.status(400).json({ error: "Login Failed." });
    }
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;