const express = require("express");
const router = express.Router();
const videoData = require("../data/video-details.json");
const uID = require("uuid");
const fs = require("fs");

router
  .route("/videos")
  .get((req, res) => {
    res.send(videoData);
  })
  .post((req, res) => {
    const newVideo = {
      id: uID.v4(),
      title: req.body.title,
      channel: "Unknown",
      image: "http://localhost:3050/images/Upload-video-preview.jpg",
      description: req.body.description,
      views: "1",
      likes: "0",
      duration: "3:05",
      video: "",
      timestamp: Date.now(),
      comments: [],
    };
    const existingVideos = JSON.parse(
      fs.readFileSync("data/video-details.json")
    );
    existingVideos.push(newVideo);
    fs.writeFile(
      "data/video-details.json",
      JSON.stringify(existingVideos, null, 2),
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log("video added");
      }
    );
  });

router.get("/videos/:id", (req, res) => {
  const videoId = req.params.id;
  const findVideo = videoData.find(({ id }) => id === videoId);
  res.send(findVideo);
});

module.exports = router;
