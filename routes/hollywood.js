const express = require('express');
const hollywoodData = require('../controllers/hollywood');
const mainRouter = express.Router();
// mainRouter.get('/hollywood', APIdata.getData)
mainRouter.route("/hollywoodPost").get(hollywoodData.getHollywoodPost)
mainRouter.route("/hollywoodFirstPost").get(hollywoodData.getHollywoodFirstPost)
mainRouter.route("/hollywoodTopPost").get(hollywoodData.getHollywoodTopPost)
module.exports = mainRouter