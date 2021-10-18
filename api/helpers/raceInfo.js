const axios = require("axios").default;
const xml2js = require('xml2js');

const options = {
  method: 'GET',
  url: 'https://f1-race-schedule.p.rapidapi.com/api',
  headers: {
    'x-rapidapi-host': 'f1-race-schedule.p.rapidapi.com',
    'x-rapidapi-key': '466c57c0fcmsh0693d0d79ef84b5p1e06b0jsnbafff060fab9'
  }
};

const getSchedule = async () => {
    const response = await axios.get(options.url, {
        headers: options.headers
    });

    return response.data;
}

const getNextRace = async () => {
  const response = await getRaceResults();

  return Number(response.MRData.RaceTable[0].$.round);
}

const ergastSchedule = async () => {
  const response = await axios.get('http://ergast.com/api/f1/2021');

  return response;
}

const getRaceResults = async () => {
    let raceResults;
    const response = await axios.get('http://ergast.com/api/f1/2021/last/results');
    xml2js.parseString(response.data, function (err, result) {
      raceResults = result;
    })
    return raceResults;
}

module.exports = {
  getSchedule,
  getNextRace, 
  getRaceResults,
  ergastSchedule
};


