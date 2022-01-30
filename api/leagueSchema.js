const mongoose = require("mongoose");

const LeagueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("Leagues", LeagueSchema);

module.exports = User;
