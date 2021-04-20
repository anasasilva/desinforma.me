const router = require("express").Router();
const controller = require("../../controllers/newsController");

router.get("/", controller.getNews);

module.exports = router;
