const express = require('express');
const xml2js = require('xml2js');

const router = express.Router();
const raceInfo = require('../helpers/raceInfo');

router.get('/', async function(req, res, next) {
  const f1Schedule = await raceInfo.getSchedule();
  let raceResults = await raceInfo.getRaceResults();

  xml2js.parseString(raceResults.data, function (err, result) {
    raceResults = result;
  })

  const topThree = [
    raceResults.MRData.RaceTable[0].Race[0].ResultsList[0].Result[0].Driver[0],
    raceResults.MRData.RaceTable[0].Race[0].ResultsList[0].Result[1].Driver[0],
    raceResults.MRData.RaceTable[0].Race[0].ResultsList[0].Result[2].Driver[0]
  ]

  res.send(topThree)
  // res.send(f1Schedule);
});

module.exports = router;
