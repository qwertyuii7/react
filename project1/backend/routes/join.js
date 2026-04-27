const { Router } = require("express");

const joinrouter = Router();

const { JoinQueue_model } = require("../models/queuedb")


joinrouter.post("/join", async function (req, res) {
    try {

        const { customerName, shopId } = req.body;

        if (!customerName || customerName.trim() === "") {
            return res.status(400).json({ message: "customerName is required" });
        }
        const existing = JoinQueue_model.findOne({
            customerName,
            shopId
        })
        if(existing){
            return res.status(400).json({ message: "Already in queue" });  
        }
        
        const entry = new JoinQueue_model({
            customerName,
            shopId
        })
        const saved = await entry.save();

        res.status(201).json({
            message: "Joined queue",
            data: saved
        });
    } catch (e) {
        res.status(500).json({
            message: "Error joining queue",
            error: err.message
        });

    }
})



module.exports = {
    joinrouter=joinrouter
}

