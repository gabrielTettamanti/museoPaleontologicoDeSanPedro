const express = require("express");
const router = express.Router();

const museumController = require("../controllers/museumController");

/* Museum Tour */ 
router.get("/tour", museumController.tour);

/* Countryside visit */
router.get("/visit", museumController.visit)

module.exports = router;