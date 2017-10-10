const moment = require('moment')
const r2 = require('r2')
const _ = require('lodash')
const Promise = require('bluebird')

module.exports = async function (req, res) {
  const app = this;

  let foodsToAvoid = []
  let pastFiveBirthdays = []

  for (var i = 0, years = 5; i < years; i++) {
    let birthday = moment(req.body.date)
    pastFiveBirthdays.push(birthday.subtract(i, 'years'))
  }

  Promise.map(pastFiveBirthdays, birthday => {
    return getFoodsToAvoidWithinTwoWeeksOf(birthday)
      .then(foods => {
        foods.map(food => {
          foodsToAvoid.push(food);
        })
      })
  }).then(() => {
    return res.json({ foodsToAvoid: foodsToAvoid })
  })

  async function getFoodsToAvoidWithinTwoWeeksOf(date) {
    const oneWeekBeforeDate = date.subtract(1, 'week').format('YYYYMMDD')
    const oneWeekAfterDate = date.add(2, 'week').format('YYYYMMDD')

    const url = `https://api.fda.gov/food/enforcement.json?search=report_date:[${oneWeekBeforeDate}+TO+${oneWeekAfterDate}]`

    let resp = await r2.get(url).json

    return _.map(resp.results, result => {
      return result.product_description
    })
  }
}
