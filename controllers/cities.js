const express = require("express");
const router = express.Router();
const cities = require("../models/cities");
const activity_details = require("../models/activity_details");
const package_details = require("../models/package_details");
const package_group_price_details = require("../models/package_group_price_details");
const currency_exchange_rate = require("../models/currency_exchange_rate");
const package_price_details = require("../models/package_price_details");
const activity_images = require("../models/activity_images");
const categoriesModel = require("../models/categories");
const request = require("request-promise");
const helper = require("../utilities/helper");
const { getCityCategories } = require("../services/getCityCategories");
const { getCityActivities } = require("../services/getCityActivities");
const async = require("async");

router.get("/", async (req, res) => {
  var city;
  try {
    city = await cities.findAll();
  } catch (err) {
    helper.send(res, 500, "", err);
  }
  helper.send(res, 200, city);
});

router.get("/cityPage/:slug", async (req, res) => {
  let categories;
  let weather;
  var responseArray = { cityActivities: [] };
  var city;

  // city data
  city = await cities.findOne({
    where: {
      slug: req.params.slug,
    },
  });

  if (!city) {
    helper.send(res, 403, "", "Not Found");
  } else {
    responseArray.city_id = city.city_id;
    responseArray.name = city.displayname;
    responseArray.slug = city.slug;
    responseArray.first_block_text = city.first_block_text
      ? city.first_block_text
      : "";
    responseArray.second_block_text = city.second_block_text
      ? city.second_block_text
      : "";
    responseArray.image_url = city.image_url ? city.image_url : "";
    responseArray.alt_image_description = city.alt_image_description
      ? city.alt_image_description
      : "";
    responseArray.date = `Today, ${new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })}`;
    responseArray.largeimage_path_name =
      city.largeimageurl.split("/")[city.largeimageurl.split("/").length - 2] +
      "/" +
      city.largeimageurl.split("/")[city.largeimageurl.split("/").length - 1];
    responseArray.largeimageurl = city.largeimageurl;
  }

  async.parallel(
    {
      // City activities
      activities: async () => {
        let result = await getCityActivities(req, res, city);
        return result;
      },
      // weather
      weather: (callback) => {
        request(
          "https://api.openweathermap.org/data/2.5/weather?APPID=d56ede068d1a756433df9ee0d1b6b263&q=" +
            city.displayname
        ).then((results) => {
          results = JSON.parse(results);
          callback(null, results);
        });
      },
      // categories
      categories: async () => {
        let result = await getCityCategories(city.city_id);
        return result;
      },
    },
    function (err, results) {
      responseArray.categories = results.categories;
      responseArray.cityActivities = results.activities.cityActivities;
      responseArray.popular_count = results.activities.popular_count;
      weatherRes = results.weather;
      {
        if (weatherRes.cod !== 200) {
          helper.send(res, 500, "", "someting failed");
        }

        if (weatherRes.cod == "200") {
          var kelvin = weatherRes.main.temp;
          var weather_details = weatherRes.weather;
          if (weatherRes.weather.length > 0) {
            var weather_main = weather_details[0].main;
            var icon = weather_details[0].icon;
            var icon_url = "https://openweathermap.org/img/w/" + icon + ".png";
          }
          var celcius = kelvin - 273.15;
          celcius = celcius.toFixed(2);
          celcius = Math.ceil(celcius);
          responseArray.temprature = celcius;
          responseArray.weather_condition = weather_main;
          responseArray.weather_icon_url = icon_url;
        }
      }
      helper.send(res, 200, responseArray, "");
    }
  );
});

module.exports = router;
