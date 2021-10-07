const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

app.use(cors());

mongoose.connect('**************************************************************************************************',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('MongoDB connected...');
    }
  });

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.use('/auth', require('./routes/authRoutes'));
app.use('/user', require('./routes/twitterSentiment'));

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});