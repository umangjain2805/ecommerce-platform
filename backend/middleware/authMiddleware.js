const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {

  // Read Authorization Header
  const authHeader = req.headers.authorization;

  // Check if token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Not authorized. No token provided.",
    });
  }

  // Remove "Bearer "
  const token = authHeader.split(" ")[1];

  try {

    // Verify Token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Save user information
    req.user = decoded;

    // Continue to next middleware/controller
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = protect;
