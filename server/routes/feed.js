const express = require("express")

const router = express.Router()

const {FEED,INFO,PAGE,SINGLEPAGE} = require('../utils/constants/app_constants').ROUTES.POST;

const feed = require("../controllers/feed")

// router.get(FEED,feed.comments);

router.get(INFO,feed.allPostInfo);

router.get(PAGE,feed.allPagesInfo);

router.get(SINGLEPAGE,feed.singlePagesInfo);

module.exports = router;