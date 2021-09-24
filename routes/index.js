const express = require("express");
const router = express.Router();
const imgArr = [
    {
        id: "1",
        path: "https://www.cricbuzz.com/a/img/v1/420x235/i1/c213560/kkr-cruise-to-fourth-spot-with.jpg",
        description: "KKR cruise to fourth spot with comprehensive win"
    },
    {
        id: "2",
        path: "https://www.cricbuzz.com/a/img/v1/420x235/i1/c213501/parsing-crickets-new-lexicon.jpg",
        description: "Parsing cricket's new lexicon"
    },
    {
        id: "3",
        path: "https://www.cricbuzz.com/a/img/v1/420x235/i1/c213508/rcb-csk-face-sharjah-inquest.jpg",
        description: "RCB, CSK face Sharjah inquest of batting brawn"
    },
];
// const imgArr = [];

router.get("/loadImage", (req, res) => {
  if (imgArr.length === 0) {
    res.status(500).json({ msg: "Server Error" });
  } else {
    res.status(200).json(imgArr);
  }
});

module.exports = router;
