const express = require("express");
const router = express.Router();
const videoData = require("../data/video-details.json");
const uID = require("uuid");

router
  .route("/videos")
  .get((req, res) => {
    res.send(videoData);
  })
  .post((req, res) => {
    console.log(req.body);
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
    console.log(newVideo);
  });

router.get("/videos/:id", (req, res) => {
  const videoId = req.params.id;
  const findVideo = videoData.find(({ id }) => id === videoId);
  res.send(findVideo);
});

module.exports = router;
