const mongoose = require("mongoose");
const validator = require("validator");

const gate_metadata = mongoose.model("gate_metadata", {
  gate_id: {
    type: Number,
    //1, 2, 3.
    required: true
  },
  gate_type: {
    type: String,
    //Entrance or Exit.
    required: true
  },
  gate_description_misc: {
    type: String,
    //South entrance of the Universities main parking lot for Building B1 and B4.
    // In front of railway.
    required: true
  }
});

module.exports = gate_metadata;
