// express
const express = require("express");
const app = express();
const videoRoutes = require("./routes/videos");
// dotenv
require("dotenv").config();
// cors
const cors = require("cors");
app.use(cors());
// fs
const fs = require("fs");
// video data
const videoData = require("./data/video-details.json");

const { PORT, BACKEND_URL } = process.env;

app.use(express.json());

app.use(express.static("public"));

app.use("/", videoRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
