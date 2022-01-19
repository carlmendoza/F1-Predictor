const express = require('express');
const predictorModel = require('../schema');
const xml2js = require('xml2js');

const router = express.Router();
const raceInfo = require('../helpers/raceInfo');

const calculateResults = async (podium) => {
  // TODO add a filter on find to fetch predictions on the same raceday.
  const allRecords = await predictorModel.find();

  allRecords.map(async (record) => {
    let points = 0;

    if (record._doc.first == podium[0].PermanentNumber[0]) {
      points += 3;
    }

    if (record._doc.second == podium[1].PermanentNumber[0]) {
      points += 2;
    }

    if (record._doc.third == podium[2].PermanentNumber[0]) {
      points += 1;
    }

    record.points = points;
    await record.save();
  })

  return allRecords;
};

router.get('/', async function (req, res, next) {
  const f1Schedule = await raceInfo.getSchedule();

  const raceResults = await raceInfo.getRaceResults();

  let x = new Date(f1Schedule.filter((e) => e.track == 'Formula 1 Gulf Air Bahrain Grand Prix 2021')[0].date);
  x.toISOString().substring(0, 10);

  console.log('hello' + x.toISOString().substring(0, 10));

  const topThree = [
    raceResults.MRData.RaceTable[0].Race[0].ResultsList[0].Result[0].Driver[0],
    raceResults.MRData.RaceTable[0].Race[0].ResultsList[0].Result[1].Driver[0],
    raceResults.MRData.RaceTable[0].Race[0].ResultsList[0].Result[2].Driver[0]
  ]

  const r = await calculateResults(topThree);

  res.send(topThree);
});

module.exports = router;
