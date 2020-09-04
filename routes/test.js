const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("api test success");
});

module.exports = router;
