const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = function async(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    res.status(401).json({ msg: "no token found , not authenticated" });
  }

  try {
    const decode = jwt.verify(token, config.JWTSecret);
    req.user = decode.user;
    next();
  } catch (error) {
    res.json({ msg: "token is not valid" });
  }
};
