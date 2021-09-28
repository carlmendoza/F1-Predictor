const mongoose = require("mongoose");

const PredictorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    first: {
        type: String,
        required: true,
    },
    second: {
        type: String,
        required: true,
    },
    third: {
        type: String,
        required: true,
    },
  });
  
  const Predictor = mongoose.model("Predictor", PredictorSchema);
  
  module.exports = Predictor;