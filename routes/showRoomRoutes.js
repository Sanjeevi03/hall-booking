const express = require("express");
const { showRoomModule } = require("../modules/showRoomModule");

const router = express.Router();

router.get('/',showRoomModule)

module.exports = router;