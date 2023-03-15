const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");

require("dotenv").config();

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authentification failed!");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    if (!token) {
      const error = new HttpError("Authentication failed!", 403);
      return next(error);
    }
  }
};
