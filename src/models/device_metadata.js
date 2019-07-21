const mongoose = require("mongoose");
const validator = require("validator");

const device_metadata = mongoose.model("device_metadata", {
  device_id: {
    type: Number,
    required: true,
    validate(val) {
      if (val <= 0) {
        throw new Error("Error: Device ID must be positive integer.");
      }
    }
  },
  device_name_type: {
    type: String,
    required: true
  },
  device_owner: {
    type: String,
    required: true
  },
  device_owner_email: {
    type: String,
    required: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Error: Email is invalid.");
      }
    }
  }
});

module.exports = device_metadata;
