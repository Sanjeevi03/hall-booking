const express = require("express");
const { addRoomModule } = require("../modules/addRoomModule");

const router = express.Router();

router.post('/',addRoomModule)

module.exports = router;