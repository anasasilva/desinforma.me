const router = require("express").Router();

const game = require("./game");

router.use("/game", game);

module.exports = router;
