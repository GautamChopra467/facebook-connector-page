
require("dotenv").config()
const express = require("express");
const cors  = require("cors");
const app = express();

const port  = process.env.PORT || 5000;

app.use(cors());

app.use("/",require("./routes/feed"))

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
});


