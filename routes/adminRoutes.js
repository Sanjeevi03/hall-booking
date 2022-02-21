const express = require('express')
const router = express.Router()
const {updateRoom,bookedRooms} = require('../modules/adminModule')

router.get('/',bookedRooms)


module.exports=router;