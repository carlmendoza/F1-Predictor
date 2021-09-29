const express = require('express');
const { response } = require('../app');
const predictorModel = require('../schema')
const router = express.Router();

router.post('/', async (request, response) => {
    const { body } = request;
    const predictor = new predictorModel({
        name: body.user,
        first: body.first,
        second: body.second,
        third: body.third
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