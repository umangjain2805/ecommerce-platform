const bcrypt = require("bcryptjs");
const users = require("../data/users");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if all fields exist
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  // Check if user already exists
  const userExists = users.find(
    (user) => user.email === email
  );

  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    },
  });
};

const loginUser = async (req, res) => {

  const { email, password } = req.body;

  // Check if user exists
  const user = users.find(
    (user) => user.email === email
  );

  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  // Compare password
  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  // Generate JWT Token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res.json({
    message: "Login Successful",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};
const getProfile = (req, res) => {

  res.json({
    message: "Protected Route",
    user: req.user,
  });

};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};