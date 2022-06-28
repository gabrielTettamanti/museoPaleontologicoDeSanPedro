const express = require("express");
const router = express.Router();

const museumController = require("../controllers/museumController");

router.get("/tour", museumController.list);

module.exports = router;