const helper = require("../utilities/helper");
const urlMetadata = require("url-metadata");

module.exports.getMeta = async (req, res, url) => {
  let metaData;
  try {
    metaData = await urlMetadata(url);
    return metaData;
  } catch (err) {
    helper.send(res, 500, "", err);
  }
};
