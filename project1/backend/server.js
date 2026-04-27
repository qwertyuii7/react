const express = require("express")
const mongoose = require("mongoose")

const connectionDB= require("./config/db")
require( 'dotenv' ).config()


const app = express()
app.use(express.json())


connectionDB();

app.use("/join" , joinrouter);
app.use("/booking",bookingrouter);
app.use("/queue",queue_router);



const { queue_router } = require ("../backend/routes/queue_router")
const { bookingrouter } = require ("../backend/routes/booking");
const { joinrouter } = require("../backend/routes/join");

app.get("/", (req, res) => {
  res.send("Server running");
});



app.listen(5000, () => {
    console.log("server is listening to port 5000")
});