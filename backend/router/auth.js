const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
  res.cookie("Nin", "Nin Cookies");
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
    const userExist = await User.findOne({ email: email });
    
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
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Invalid Request" });
    }

    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);
    if (userLogin) {
      const pwdMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      });

      if (pwdMatch) {
        res.status(201).json({ message: "Login Successfully" });
      } else {
        res.status(400).json({ error: "Login Failed. Password" });
      }
    } else {
      res.status(400).json({ error: "Login Failed. email" });
    }
    

  } catch (error) {
    console.log(error);
  }

});


module.exports = router;