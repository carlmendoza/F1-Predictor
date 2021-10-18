const express = require('express');
const { response } = require('../app');
const predictorModel = require('../schema');
const router = express.Router();
const raceInfo = require('../helpers/raceInfo');

router.post('/', async (request, response) => {
    const { body } = request;
    const race = (await raceInfo.getNextRace()) + 1;

    const predictor = new predictorModel({
        name: body.user,
        first: body.first,
        second: body.second,
        third: body.third,
        points: 0,
        race
    })

    try {
        await predictor.save();
        response.send(predictor);
    } catch (e) {
        console.log(e);
        response.status(500).send(e);
    }
});

module.exports = router;