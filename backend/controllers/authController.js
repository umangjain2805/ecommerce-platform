const bcrypt = require("bcryptjs");
const users = require("../data/users");

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

module.exports = {
  registerUser,
};