const router = require("express").Router();
const express = require("express");

const api = require("./api");

router.use("/api", api);

module.exports = router;
