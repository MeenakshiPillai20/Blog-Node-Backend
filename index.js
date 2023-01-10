const express = require("express");
const app = express();
const hollywood = require('./routes/hollywood');
const bollywood = require('./routes/bollywood');
const cors = require('cors')

app.use(cors());

app.use("/",hollywood);
app.use("/",bollywood);

app.listen(9000,function(){
    console.log( "Server is running in port 9000")
})