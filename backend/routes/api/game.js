const router = require("express").Router();
const controller = require("../../controllers/gameController");

router.get("/", controller.getGame);

module.exports = router;
