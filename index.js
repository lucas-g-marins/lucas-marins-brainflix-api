// express
const express = require("express");
const app = express();
// dotenv
require("dotenv").config();
// cors
const cors = require("cors");
app.use(cors());
// video data
const videoData = require("./data/video-details.json");

const { PORT, BACKEND_URL } = process.env;

app.get("/video-data", (req, res) => {
  res.send(videoData);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
