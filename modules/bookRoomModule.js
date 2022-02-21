// const mongo = require("../shared/connect");

// module.exports.bookRoomModule = async (req, res, next) => {
//   try {
//     var find_room = await mongo.db.collection("rooms").findOne({ "roomno": parseInt(req.params.id) });
//     if (find_room["active-status"] === true) {
//      var data = await mongo.db.collection("booked-room").insertOne(req.body);
//      var upd = await mongo.db.collection("rooms").updateOne({"roomno":parseInt(req.params.id)}, {$set: {"active-status":false}});
//      return res.send({data,upd});
//    } else {
//      return res.send({ msg: "This Room is already Booked" });
//    }
//   } catch (err) {
//     console.log("Error in bookRoom", err);
//   }
// }
// };
