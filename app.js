const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const routes = require('./routes');

app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded());
app.use(express.json());

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
  console.log('Database Connected');
}
app.get('/', (req, res) => {
  res.send({ status: 'API is running' });
});

app.use('/', routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
