const express = require("express")

const router = express.Router()

const feed = require("../controllers/feed")

router.get("/feed",feed.comments);

module.exports = router;