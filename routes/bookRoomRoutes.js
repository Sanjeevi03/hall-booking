const express = require("express");
const {bookRoomModule} = require("../modules/bookRoomModule");
const router = express.Router();

router.get("/", bookRoomModule);

module.exports = router;