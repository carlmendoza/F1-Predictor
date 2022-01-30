const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const leagueModel = require('../leagueSchema');

router.post('/create-league', async (request, response) => {
    const { body } = request;
    const leagueCode = crypto.randomBytes(5).toString('hex');

    const leagueExists = await leagueModel.findOne({ name: body.name });

    if (leagueExists) {
        response.statusMessage = `League ${body.name} already exists!`;
        return response.status(400).end();
    }

    const league = new leagueModel({
        name: body.name,
        code: leagueCode
    });

    try {
        await league.save();
        response.send(leagueCode);
    } catch (e) {
        console.log(e);
        response.status(500).send(e);
    }


});

module.exports = router;