const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv'); 
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(express.json());
dotenv.config();

//set environment variable
const isProduction = process.env.NODE_ENV === 'production';
const uri = process.env.MONGODB;
const port = process.env.PORT || 6000;

//db config
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .catch(error => handleError(error));

mongoose.set('debug', true);
const conn = mongoose.connection
conn.once('open', _ => {
  console.log('Database connected: ', uri)
})

conn.on('error', err => {
  console.error('connection error:', err)
})

if(!isProduction) {
  app.use(errorHandler());
}

//Enabling CORS Pre-Flight
app.options('*', cors());

//routes
const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

/* Serve the static files from the React app */
app.use('/static', express.static(path.join(__dirname, '/client/build')));

/* Handles any requests that don't match the ones above*/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
