const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  meetingRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MeetingRoom',
    required: true
  },
  day: {
    type: String,
    required: true
  },
  reservedHours: {
    type: [String], 
    required: true
  },
  purpose: {
    type: String,
    required: true
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;