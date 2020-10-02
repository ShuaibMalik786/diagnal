const activity_details = require("../models/activity_details");
const activity_images = require("../models/activity_images");
const currency_exchange_rate = require("../models/currency_exchange_rate");
const package_details = require("../models/package_details");
const package_group_price_details = require("../models/package_group_price_details");
const package_price_details = require("../models/package_price_details");
const helper = require("../utilities/helper");

module.exports.getCityActivities = async (req, res, city) => {
  var activities;
  var responseArray = { cityActivities: [] };
  activities = await activity_details.findAll({
    where: {
      city_id: city.city_id,
      status: 1,
    },
    order: [["activity_sequence", "ASC"]],
    // group: ["activity_id"],
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
    order: [["activity_id", "DESC"]],
  });

  if (activities.length == 0) {
    helper.send(res, 200, responseArray, "");
  }

  let abc = await customFunction(activities, city, req, res);
  return abc;
};

async function customFunction(activities, city, req, res) {
  var responseArray = { cityActivities: [] };
  var to_currency_exchange_rate = 1;
  var curr_exchange_rate;

  for (var i = 0; i < activities.length; i++) {
    responseArray.cityActivities.push({
      activity_id: activities[i].activity_id,
    });
  }

  if (req.query.currency) {
    curr_exchange_rate = await currency_exchange_rate.findOne({
      where: {
        currency: req.query.currency,
      },
    });
    to_currency_exchange_rate = curr_exchange_rate.rate;
  }
  const getActivities = activities.map(async (item, i) => {
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

    var curr_exchange_rate = 1;

    if (packageArr) {
      // $currency = packageArr.package_price_details.currency;
      if (
        packageArr.package_price_detail.currency &&
        req.query.currency &&
        packageArr.package_price_detail.currency != req.query.currency
      ) {
        var fromCurrencyRates = await currency_exchange_rate.findOne({
          where: {
            currency: packageArr.package_price_detail.currency,
          },
        });
        var from_currency_exchange_rate = fromCurrencyRates.rate;
        curr_exchange_rate =
          Number(to_currency_exchange_rate) /
          Number(from_currency_exchange_rate);
        if (curr_exchange_rate == "") {
          curr_exchange_rate = 1;
        }

        var MinActivityPackagesArr = await package_details.findOne({
          where: {
            status: 1,
            activity_id: activities[i].activity_id,
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

        responseArray.cityActivities[i].list_price = (
          curr_exchange_rate *
          packageArr.package_group_price_detail.original_price
        ).toFixed(2);
        responseArray.cityActivities[i].web_price = (
          curr_exchange_rate *
          packageArr.package_group_price_detail.original_price
        ).toFixed(2);
        responseArray.cityActivities[i].price = (
          curr_exchange_rate *
          packageArr.package_group_price_detail.original_price
        ).toFixed(2);
        (responseArray.cityActivities[i].currency =
          packageArr.package_price_detail.currency),
          (responseArray.cityActivities[i].request_currency =
            req.query.currency);
        responseArray.cityActivities[i].min_list_price = (
          curr_exchange_rate *
          packageArr.package_group_price_detail.original_price
        ).toFixed(2);
        responseArray.cityActivities[i].min_web_price = (
          curr_exchange_rate *
          packageArr.package_group_price_detail.original_price
        ).toFixed(2);
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
        var image_mapping = await activity_images.findAll({
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
          var image_path_name =
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
      }
    }
  });

  //Popular count
  var popular_count;
  if (activities[0].status == 1 && activities[0].city_id == city.city_id) {
    popular_count = await package_details.findAll({
      where: {
        status: 1,
        popular_category: 1,
      },
      include: [
        {
          model: activity_details,
          where: {
            status: 1,
          },
        },
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

  await Promise.all(getActivities);
  return responseArray;
}
