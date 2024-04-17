/*
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Serve static files (React frontend)
app.use(express.static('client/build'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/rawDataDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/

/*
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/SampleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const RawDataSchema = new mongoose.Schema({
  timestamp: Date,
  value: Number,
});

const RawData = mongoose.model('RawData', RawDataSchema);

app.get('/api/raw-data', async (req, res) => {
  try {
    const data = await RawData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

*/


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RawData = require('./models/RawData');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/SampleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define Mongoose schema and model for your data

// Define API endpoint to fetch data from MongoDB

app.get('/api/data', async (req, res) => {
  try {
    // Fetch data from MongoDB
    const data = await RawData.find(); // Replace YourModel with your Mongoose model
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
