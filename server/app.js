
require("dotenv").config()
const express = require("express");
const cors  = require("cors");
const connect = require("./db/connection")
const app = express();

const port  = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use("/",require("./routes/feed"));

app.use("/",require("./routes/user"));

app.use("/",require("./routes/messages"));


app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
    connect(process.env.MONGO_URI);
});


