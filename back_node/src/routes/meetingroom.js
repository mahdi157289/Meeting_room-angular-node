const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");
const {
  createMeetingRoom,
  getAllMeetingRooms,
  updateMeetingRoom,
  getMeetingRoomById,
  getAvailableHoursForDay,
  deleteMeetingRoom,
} = require("../controllers/meetingRoomController");


router.get("/meeting-rooms", getAllMeetingRooms);
router.get("/meeting-rooms/:id", getMeetingRoomById);
router.post("/meeting-rooms",authenticate ,createMeetingRoom);
router.put("/meeting-room/:id", authenticate, updateMeetingRoom);
router.get("/meeting-rooms/getAvailebleHours/:id/:day",getAvailableHoursForDay)
router.delete("/meeting-room/:id", authenticate, deleteMeetingRoom);


module.exports = router;
