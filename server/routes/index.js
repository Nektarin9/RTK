const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/services", require("./services"));

module.exports = router;
