// app.js
const express = require('express');
const cors = require('cors');
const { mockUser } = require('./middleware/auth');

const userRoutes = require('./routes/userRoutes');
const recordRoutes = require('./routes/recordRoutes');
const summaryRoutes = require('./routes/summaryRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(mockUser);
app.get('/', (req, res) => {
  res.send("Finance Backend is running 🚀");
});
app.use('/users', userRoutes);
app.use('/records', recordRoutes);
app.use('/summary', summaryRoutes);

module.exports = app;
