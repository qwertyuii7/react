const { Router } = require("express");
const { model } = require("mongoose");

queue_router = Router();

const { JoinQueue_model } =require("../models/queuedb")

queue_router.get("/", async function(req,res){

    try{

    const queue = JoinQueue_model.find({
        shopId,
        status:"waiting"
    }).sort({ joinedAt: 1})

    const formatted = queue.map((user,index)=>({
        customerName :user.customerName,
        position =index+1

    }))
    res.json(formatted);
    }catch(err){
        res.status(500).json(
            {error: err.message}
        )
    }

})

queue_router.post("/next", async function(req,res){

})

module.exports={
    queue_router

}