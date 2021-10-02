const axios = require("axios").default;

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

const getRaceResults = async () => {
    const response = await axios.get('http://ergast.com/api/f1/2021/5/results');

    return response;
}

module.exports = {getSchedule, getRaceResults};


