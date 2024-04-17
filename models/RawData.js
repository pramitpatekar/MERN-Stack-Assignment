const mongoose = require('mongoose');

const rawDataSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true
  },
  sample: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('RawData', rawDataSchema);
