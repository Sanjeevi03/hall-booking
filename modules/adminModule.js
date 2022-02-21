const express = require('express')
const mongo = require('../shared/connect')
module.exports.bookedRooms = async(req,res,next)=>{
   let fin = await mongo.db.collection("rooms").find({"active-status":false}).toArray();
   res.send(fin)
}
module.exports.nonbookedRooms = async(req,res,next)=>{
   let fin2 = await mongo.db.collection("rooms").find({"active-status":true}).toArray();
   res.send(fin2)
}