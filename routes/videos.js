const express = require("express");
const router = express.Router();

router
  .route("/videos")
  .get((req, res) => {
    res.send(videoData);
  })
  .post((req, res) => {});

router.get("/videos/:id", (req, res) => {
  const videoId = req.params.id;
  const findVideo = videoData.find(({ id }) => id === videoId);
  res.send(findVideo);
});

module.exports = router;
