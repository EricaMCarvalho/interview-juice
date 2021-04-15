const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const decks = require('./routes/decks');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/v1/decks', decks);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is listening in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  )
);
