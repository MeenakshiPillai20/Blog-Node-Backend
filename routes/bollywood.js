const express = require('express');
const bollywoodData = require('../controllers/bollywood');
const mainRouter = express.Router();

mainRouter.route("/bollywoodPost").get(bollywoodData.getBollywoodPost)

module.exports = mainRouter