const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const io = require('./socketio');

const app = express();

const keys = require('./config/keys');

const surveyRoutes = require('./routes/surveyRoute');
const analystRoutes = require('./routes/analystRoute');

const connDb = mongoose.connect(keys.mongoURI).then(
  () => {
    console.log('Database connection successful');
  },
  err => {
    console.log(err);
  }
);

app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/sdsurvey', surveyRoutes);
app.use('/api/sdsurvey/analysts', analystRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const PORT = process.env.PORT || 5060;
const server = app.listen(PORT);

io.listen(server);

module.exports = app;
