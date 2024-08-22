const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ServicesSchema = new Schema({
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
});

const Services = mongoose.model("Services", ServicesSchema);

module.exports = Services;
