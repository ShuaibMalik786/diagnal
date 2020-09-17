const express = require("express");
const router = express.Router();
const winston = require("winston");
const cities = require("../models/cities");
const activity_details = require("../models/activity_details");
const package_details = require("../models/package_details");
const package_group_price_details = require("../models/package_group_price_details");
const currency_exchange_rate = require("../models/currency_exchange_rate");
const package_price_details = require("../models/package_price_details");

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

// router.get("/cityPage/:cityId", async (req, res) => {
//   let city;
//   city = await cities.findOne({
//     where: {
//       city_id: req.params.cityId,
//     },
//   });

//   if (!city) {
//     res.status(403).send("Not Found");
//   }

//   let activities;
//   activities = await activity_details.findAll({
//     where: {
//       city_id: req.params.cityId,
//       status: 1,
//     },
//     order: [["activity_id", "DESC"]],
//     group: ["activity_id"],
//     include: {
//       model: package_details,
//       attributes: ["categoryL1", "package_name"],
//       where: {
//         status: 1,
//       },
//       include: {
//         model: package_group_price_details,
//         where: {
//           status: 1,
//         },
//       },
//     },
//   });

//   let responseArray = {
//     city_id: city.city_id,
//     name: city.displayname,
//     first_block_text: city.first_block_text ? city.first_block_text : "",
//     second_block_text: city.second_block_text ? city.second_block_text : "",
//     imageurl: city.imageurl,
//     largeimageurl: city.largeimageurl ? city.largeimageurl : "",
//   };

//   res.send(responseArray);
// });

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

  let responseArray = {
    city_id: city.city_id,
    name: city.displayname,
    slug: city.slug,
    first_block_text: city.first_block_text ? city.first_block_text : "",
    second_block_text: city.second_block_text ? city.second_block_text : "",
    imageurl: city.imageurl ? city.imageurl : "",
    alt_image_description: city.alt_image_description
      ? city.alt_image_description
      : "",
    date: `Today, ${new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })}`,
    temprature: "zzzzzzzzzzzzzz",
    weather_condition: "zzzzzzzzzzzzzz",
    weather_icon_url: "zzzzzzzzzzzzzz",
    largeimage_path_name: "zzzzzzzzzzzzzz",
    largeimageurl: "zzzzzzzzzzzzzz",
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
        activity_id: activities[0].activity_id,
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
            MinActivityPackagesArr.package_group_price_detail.original_price
          ).toFixed(2),
          web_price: (
            curr_exchange_rate *
            MinActivityPackagesArr.package_group_price_detail.original_price
          ).toFixed(2),
          price: (
            curr_exchange_rate *
            MinActivityPackagesArr.package_group_price_detail.original_price
          ).toFixed(2),
          currency: MinActivityPackagesArr.package_price_detail.currency,
          request_currency: req.query.currency,
          min_list_price: (
            curr_exchange_rate *
            MinActivityPackagesArr.package_group_price_detail.original_price
          ).toFixed(2),
          min_web_price: (
            curr_exchange_rate *
            MinActivityPackagesArr.package_group_price_detail.original_price
          ).toFixed(2),
          min_web_price: (
            curr_exchange_rate *
            MinActivityPackagesArr.package_group_price_detail.original_price
          ).toFixed(2),
        });

        if (MinActivityPackagesArr) {
          responseArray.cityActivities[i].min_default_original_price = (
            curr_exchange_rate *
            MinActivityPackagesArr.package_group_price_detail.original_price
          ).toFixed(2);
        }
        res.send(responseArray);
      }
    }
  }

  res.send(packageArr);
});

module.exports = router;
