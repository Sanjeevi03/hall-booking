
const mongo = require("../shared/connect");

module.exports.addRoomModule = async (req, res, next) => {
  try {
    var data = await mongo.db.collection("rooms").insertOne(req.body);
    res.send(data);
  } catch (err) {
    console.log("Error", err);
  }
};
