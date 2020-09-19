const express = require("express");
const router = express.Router();
const winston = require("winston");
const cities = require("../models/cities");
const activity_details = require("../models/activity_details");
const package_details = require("../models/package_details");
const package_group_price_details = require("../models/package_group_price_details");
const currency_exchange_rate = require("../models/currency_exchange_rate");
const package_price_details = require("../models/package_price_details");
const activity_images = require("../models/activity_images");
const request = require("request-promise");

router.get("/", async (req, res) => {
  let city;
  try {
    city = await cities.findAll();
  } catch (e) {
    winston.error(e);
    res.send(e);
  }
  res.send(city);
});

router.get("/cityPage/:slug", async (req, res) => {
  let city;
  city = await cities.findOne({
    where: {
      slug: req.params.slug,
    },
  });

  if (!city) {
    res.status(403).send("Not Found");
  }

  let activities;
  activities = await activity_details.findAll({
    where: {
      city_id: city.city_id,
      status: 1,
    },
    order: [["activity_sequence", "ASC"]],
    group: ["activity_id"],
    include: {
      model: package_details,
      attributes: ["categoryL1", "package_name"],
      where: {
        status: 1,
      },
      include: {
        model: package_group_price_details,
        where: {
          status: 1,
        },
      },
    },
  });

  let weather = await request(
    "https://api.openweathermap.org/data/2.5/weather?APPID=d56ede068d1a756433df9ee0d1b6b263&q=" +
      city.displayname
  );

  weather = JSON.parse(weather);

  if (weather.cod !== 200) {
    res.status(500).send("error");
  }

  if (weather.cod == "200") {
    var kelvin = weather.main.temp;
    var weather_details = weather.weather;
    if (weather_details.length > 0) {
      var weather_main = weather_details[0].main;
      var icon = weather_details[0].icon;
      var icon_url = "https://openweathermap.org/img/w/" + icon + ".png";
    }
    var celcius = kelvin - 273.15;
    celcius = celcius.toFixed(2);
    celcius = Math.ceil(celcius);
  }

  let responseArray = {
    city_id: city.city_id,
    name: city.displayname,
    slug: city.slug,
    first_block_text: city.first_block_text ? city.first_block_text : "",
    second_block_text: city.second_block_text ? city.second_block_text : "",
    image_url: city.image_url ? city.image_url : "",
    alt_image_description: city.alt_image_description
      ? city.alt_image_description
      : "",
    date: `Today, ${new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })}`,
    temprature: celcius,
    weather_condition: weather_main,
    weather_icon_url: icon_url,
    largeimage_path_name: "zzzzzzzzzzzzzz",
    largeimageurl: city.largeimageurl,
    cityActivities: [],
  };

  let to_currency_exchange_rate = 1;
  let curr_exchange_rate;

  if (req.query.currency) {
    curr_exchange_rate = await currency_exchange_rate.findOne({
      where: {
        currency: req.query.currency,
      },
    });
    to_currency_exchange_rate = curr_exchange_rate.rate;
  }

  if (activities.length == 0) {
    res.send(responseArray);
  }

  for (i = 0; i < 1; i++) {
    // currencyExchange = await currency_exchange_rate.findOne({
    //   where: {
    //     currency: req.query.currency,
    //   },
    // });
    var packageArr = await package_details.findOne({
      attributes: ["status"],
      where: {
        activity_id: activities[i].activity_id,
      },
      include: [
        {
          model: package_price_details,
          attributes: ["currency"],
        },
        {
          model: package_group_price_details,
          attributes: ["original_price"],
          where: {
            status: 1,
          },
        },
      ],
      order: [
        [{ model: package_group_price_details }, "original_price", "ASC"],
      ],
    });

    let curr_exchange_rate = 1;

    if (packageArr) {
      // $currency = packageArr.package_price_details.currency;
      if (
        packageArr.package_price_detail.currency &&
        req.query.currency &&
        packageArr.package_price_detail.currency != req.query.currency
      ) {
        let fromCurrencyRates = await currency_exchange_rate.findOne({
          where: {
            currency: packageArr.package_price_detail.currency,
          },
        });
        let from_currency_exchange_rate = fromCurrencyRates.rate;
        curr_exchange_rate =
          Number(to_currency_exchange_rate) /
          Number(from_currency_exchange_rate);
        if (curr_exchange_rate == "") {
          curr_exchange_rate = 1;
        }

        let MinActivityPackagesArr = await package_details.findOne({
          where: {
            status: 1,
            activity_id: activities[0].activity_id,
          },
          include: [
            {
              model: package_price_details,
              attributes: ["currency"],
            },
            {
              model: package_group_price_details,
              attributes: ["original_price", "discounted_price"],
              where: {
                status: 1,
              },
            },
          ],
          order: [
            [{ model: package_group_price_details }, "discounted_price", "ASC"],
          ],
        });
        responseArray.cityActivities.push({
          activity_id: activities[i].activity_id,
          list_price: (
            curr_exchange_rate *
            packageArr.package_group_price_detail.original_price
          ).toFixed(2),
          web_price: (
            curr_exchange_rate *
            packageArr.package_group_price_detail.original_price
          ).toFixed(2),
          price: (
            curr_exchange_rate *
            packageArr.package_group_price_detail.original_price
          ).toFixed(2),
          currency: packageArr.package_price_detail.currency,
          request_currency: req.query.currency,
          min_list_price: (
            curr_exchange_rate *
            packageArr.package_group_price_detail.original_price
          ).toFixed(2),
          min_web_price: (
            curr_exchange_rate *
            packageArr.package_group_price_detail.original_price
          ).toFixed(2),
          // list_price: (
          //   curr_exchange_rate *
          //   packageArr.package_group_price_detail.original_price
          // ).toFixed(2),
          // web_price: (
          //   curr_exchange_rate *
          //   packageArr.package_group_price_detail.original_price
          // ).toFixed(2),
          // price: (
          //   curr_exchange_rate *
          //   packageArr.package_group_price_detail.original_price
          // ).toFixed(2),
          // price: (
          //   curr_exchange_rate *
          //   packageArr.package_group_price_detail.original_price
          // ).toFixed(2),
        });

        if (MinActivityPackagesArr) {
          responseArray.cityActivities[i].min_default_original_price = (
            curr_exchange_rate *
            MinActivityPackagesArr.package_group_price_detail.original_price
          ).toFixed(2);
          responseArray.cityActivities[i].min_default_discounted_price = (
            curr_exchange_rate *
            MinActivityPackagesArr.package_group_price_detail.original_price
          ).toFixed(2);
        } else {
          responseArray.cityActivities[i].min_default_original_price = (
            curr_exchange_rate * responseArray.cityActivities[i].min_list_price
          ).toFixed(2);
          responseArray.cityActivities[i].min_default_discounted_price = (
            curr_exchange_rate * responseArray.cityActivities[i].min_web_price
          ).toFixed(2);
        }

        // Get activities images
        let image_mapping = await activity_images.findAll({
          where: {
            activity_id: activities[i].activity_id,
            status: 1,
          },
          attributes: [
            "activity_id",
            ["content_url", "image_url"],
            "alt_image_description",
            "description",
            "filename",
            "mime_type",
            ["upload_type", "file_type"],
          ],
        });

        image_mapping = JSON.parse(JSON.stringify(image_mapping));

        responseArray.cityActivities[i].image_url = image_mapping[0].image_url;
        responseArray.cityActivities[i].alt_image_description =
          image_mapping[0].alt_image_description;

        if (image_mapping[0].image_url) {
          let image_path_name =
            image_mapping[0].image_url.split("/")[
              image_mapping[0].image_url.split("/").length - 2
            ] +
            "/" +
            image_mapping[0].image_url.split("/")[
              image_mapping[0].image_url.split("/").length - 1
            ];
          responseArray.cityActivities[i].image_path_name = image_path_name;
        }

        responseArray.cityActivities[i].name = activities[i].name;
        responseArray.cityActivities[i].city = city.displayname;
        responseArray.cityActivities[i].activity_id = activities[i].activity_id;
        responseArray.cityActivities[i].subHeading = activities[i].reviews;
        responseArray.cityActivities[i].booked = 0;
        responseArray.cityActivities[i].rating = 0;
        responseArray.cityActivities[i].discountPrice = 0;
        responseArray.cityActivities[i].activity_url = activities[i].slug;

        //Popular count
        let popular_count;
        if (
          activities[0].status == 1 &&
          activities[0].city_id == city.city_id
        ) {
          popular_count = await package_details.findAll({
            where: {
              status: 1,
              activity_id: activities[0].activity_id,
              popular_category: 1,
            },
            include: [
              //   {
              //     model: package_price_details,
              //     attributes: ["currency"],
              //   },
              {
                model: package_group_price_details,
                where: {
                  status: 1,
                },
              },
            ],
          });
        }

        responseArray.popular_count = popular_count.length;

        res.send(responseArray);
      }
    }
  }

  res.send(packageArr);
});

module.exports = router;
