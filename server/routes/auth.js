const e = require("express");
const express = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
// const user = require("../models/userModel");
const auth = require("../middleware/auth");


const authRouter = express.Router();

// SIGN UP
authRouter.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User with same email already exists!" });
    }

    const hashedPassword = await bcryptjs.hash(password, 8);

    let user = new User({
      email,
      password: hashedPassword,
      name,
    });
    user = await user.save();
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
    console.log(e);
  }
});

// sing in 

authRouter.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    // user! null or undefine then give us false this is not boolean in js 
    if (!user) {
      res.status(400).json({ msg: "user does not exits" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      res.status(400).json({ msg: "Incorrect password" });
    }
    const token = jwt.sign({ id: user.id }, "passwordKey")

    res.json({ token, ...user._doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});

authRouter.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.json(false);
    const isVerify = await jwt.verify(token, 'passwordKey');
    if (!isVerify) return res.json(false);
    const user = User.findById(isVerify.id);
    if (!user) return res.json(false);
    res.json(true);
  } catch (error) {
    res.status(500).json({ error: e.message });
  }
});

// get user data
authRouter.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({ ...user._doc, token: req.token });
});
module.exports = authRouter;