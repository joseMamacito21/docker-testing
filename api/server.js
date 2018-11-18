const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { db } = require('./config/config');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to mongoDB
mongoose 
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Conntected to mongoDB'))
  .catch(err => console.log(err));

// Routes
const clients = require('./routes/clients');

app.use('/api/clients', clients);


app.get('/', (req, res) => {
  res.send('Server Up');
});

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));