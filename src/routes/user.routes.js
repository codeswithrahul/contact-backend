// user.routes.js
const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/user.controller");
const { createUser } = require("../controllers/user.controller");

//GET
router.get("/", getUsers);

//POST
router.post("/", createUser);

module.exports = router;
