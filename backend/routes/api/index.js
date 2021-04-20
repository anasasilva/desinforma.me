const router = require("express").Router();
const news = require("./news");

router.use("/news", news);

module.exports = router;
