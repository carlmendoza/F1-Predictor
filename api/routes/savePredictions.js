const express = require('express');
const { response } = require('../app');
const predictorModel = require('../schema')
const router = express.Router();

router.post('/', async (request, response) => {
    const predictor = new predictorModel({
        name: 'carl',
        first: 'lewis',
        second: 'max',
        third: 'lando'
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