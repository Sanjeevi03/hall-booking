const express = require("express");
const homeRoutes = require('./routes/homeRoutes')
const showRoomRoutes = require('./routes/showRoomRoutes')
const mongo = require('./shared/connect');
const addRoomRoutes = require('./routes/addRoomRoutes');
const adminRoutes = require('./routes/adminRoutes')
const {nonbookedRooms} = require('./modules/adminModule')
const app = express();
app.use(express.json());
mongo.connect();

app.use('/',homeRoutes);
app.use('/addroom',addRoomRoutes);
app.use('/showroom',showRoomRoutes);
app.put('/bookroom/:id', async (req, res, next) => {
   try {
     var find_room = await mongo.db.collection("rooms").findOne({ "roomno": parseInt(req.params.id) });
     if (find_room["active-status"] === true) {
      var data = await mongo.db.collection("booked-room").insertOne(req.body);
      var upd = await mongo.db.collection("rooms").updateOne({"roomno":parseInt(req.params.id)}, {$set: {"active-status":false}});
      return res.send({data,upd});
    } else {
      return res.send({ msg: "This Room is already Booked" });
    }
   } catch (err) {
     console.log("Error in bookRoom", err);
   }
 }
);
app.use('/bookedrooms',adminRoutes)
app.use('/nonbookedrooms',nonbookedRooms)


app.get('/details', async (req,res,next)=>{
  try {
    var data = await mongo.db.collection("booked-room").find().toArray();
    res.send(data)
    
  } catch (err) {
    console.log(err);
  }
})
app.listen(8000,()=>{
   console.log("---Server Started: 8000---");
})