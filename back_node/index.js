const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const userRoute = require("./src/routes/authRoutes");
const reservationRoute = require("./src/routes/reservations");
const meetingRoomRoute = require("./src/routes/meetingroom");
const dotenv = require("dotenv");
const dbConfig = require("./src/config/database.config");
const mongoose = require("mongoose");
const { register, login } = require("./src/controllers/authController");
const app = express();


dotenv.config();
app.use(cors({origin: 'http://localhost:4200'}));

app.use(bodyParser.json());
app.use("/auth", userRoute);

app.use("/auth/register", register);
app.use("/auth/login", login);
app.use("/reservations", reservationRoute);
app.use("/meeting-Rooms", meetingRoomRoute);

app.use("/test", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(dbConfig.url, {})
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.listen(5000, () => {
  console.log(
    ` server listening on port 5000 `,
    "\n",
    ` http://localhost:5000 `
  );
});
