const express = require("express");
const mongo = require("../shared/connect");
const app= express();


module.exports.showRoomModule = async(req,res,next)=>{

   try {
        var data = await mongo.db.collection("rooms").find().toArray();
        res.send(data);
    } catch(err) {
        res.status(500).send(err);
    }
}