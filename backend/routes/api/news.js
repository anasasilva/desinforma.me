const router = require("express").Router();
const controller = require("../../controllers/newsController");

router.post("/", controller.getNews);

module.exports = router;
