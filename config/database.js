const dotenv = require('dotenv'); 
dotenv.config();

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
  .catch(error => console.log(error));

mongoose.set('debug', true);

const conn = mongoose.connection;
conn.once('open', _ => {
  console.log('Database connected: ', uri)
});
conn.on('error', err => {
  console.error('connection error:', err)
});

module.exports = conn;
