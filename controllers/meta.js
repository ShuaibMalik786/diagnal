const express = require("express");
const router = express.Router();
const request = require("request-promise");
const helper = require("../utilities/helper");
const { getMeta } = require("../services/getMetaTags");
const async = require("async");

router.post("/", async (req, res) => {
  var meta;
  try {
    meta = await getMeta(req, res, req.body.url);
  } catch (err) {
    helper.send(res, 500, "", err);
  }
  helper.send(res, 200, meta);
});

module.exports = router;
