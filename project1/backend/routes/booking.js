const { Router } = require("express");

const bookingrouter = Router();

const { JoinQueue_model } = require("../models/queuedb")
const { Booking_model } = require("../models/queuedb")
const { shop_model } = require("../models/queuedb")

bookingrouter.post("/create_booking", async function (req, res) {

    //creating a frewsh booking here 

    try {

        const { shopId, customerName, slot, date, status } = req.body;


        if (!shopId || !customerName || !slot || !date) {
            return res.status(400).json({
                message: "All required fields must be provided"
            });
        }


        const existing = Booking_model.findOne({
            shopId,
            customerName,
            "slot.from":slot.from,
            "slot.to":slot.to,
            status: { $ne: "cancelled" }

        });

        if(existing){
            return res.status(400).json({
                message:"this slot is already booked"
            })

        }


        const booking_slot = new Booking_model({
            shopid,
            customerName,
            slot,
            date,
            status

        })
        const saved = await booking_slot.save();

        res.status(201).json({ message: "booking done!", data: saved })
    } catch (error) {
        res.status(500).json({
            message: "error creating data!",
            error: error.message
        })

    }

})



module.exports = {
    bookingrouter
}