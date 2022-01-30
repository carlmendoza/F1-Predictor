const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../userSchema');
const router = express.Router();

router.post('/login', async (request, response) => {
    const { body } = request;
    const userAccount = await userModel.findOne({ email: body.login_email });

    if (!userAccount) {
        response.statusMessage = 'User does not exist';
        response.status(400).end();
    }

    const isPasswordMatching = await bcrypt.compare(body.login_password, userAccount.password);

    if (isPasswordMatching) {
        response.sendStatus(200);
    } else {
        response.statusMessage = 'Incorrect password';
        response.status(400).end();
    }
});

router.post('/', async (request, response) => {
    const salt = await bcrypt.genSalt(10);
    const { body } = request;

    const emailExists = await userModel.exists({ email: body.email });

    if (!emailExists) {
        const userAccount = new userModel({
            email: body.email,
            password: await bcrypt.hash(body.password, salt)
        });

        try {
            await userAccount.save();
            response.send(userAccount);
        } catch (e) {
            console.log(e);
            response.status(500).send(e);
        }
    }

    // bug here!
    response.statusMessage = 'User already exists!';
    response.status(400).end();
});

module.exports = router;
