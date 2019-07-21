const mongoose = require("mongoose");
const validator = require("validator");

const traffic_data_metadata = mongoose.model("traffic_data_metadata", {
  metric_id: {
    type: Number,
    required: true
    //SHOULD BE UNIQUE!!!
  },
  device_id: {
    type: Number,
    required: true
  },
  gate_id: {
    type: Number,
    required: true
  }
});

module.exports = traffic_data_metadata;
