const mongoose = require("mongoose");
const validator = require("validator");

const traffic_data_metadata = mongoose.model("traffic_data_metadata", {

  device_id: {
    type: Number,
    required: true
  },
  device_name: {
    type: String,
    required: true
  },
  reading: {
    type: Number,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  }
});

module.exports = traffic_data_metadata;
