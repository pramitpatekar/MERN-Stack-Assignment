const express = require('express');
const router = express.Router();
const RawData = require('../models/RawData');

// Route to get data filtered by time
router.get('/data', async (req, res) => {
  const { startTime, endTime } = req.query;
  try {
    const data = await RawData.find({ timestamp: { $gte: new Date(startTime), $lte: new Date(endTime) } });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add other API endpoints here

module.exports = router;
