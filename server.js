const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path'); 
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 6000;

const app = express();
app.use(cors());
app.use(express.json());

// const uri = process.env.MONGODB;
var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
    mongoose.connect('mongodb://localhost:27017/unmask-me',{ useNewUrlParser: true, useCreateIndex: true });
  }else{
    mongoose.connect('mongodb+srv://jimmy_moonstudio:jimmy_moonstudio@cluster0-ingpq.gcp.mongodb.net/unmasked?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true });
} 

// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const conn = mongoose.connection
conn.once('open', _ => {
  console.log('Database connected:')
})

conn.on('error', err => {
  console.error('connection error:', err)
})

const userRouter = require('./routes/users');
const sportRouter = require('./routes/sports');
app.use('/users', userRouter);
app.use('/sports', sportRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

fs.stat('/client/', function(err) {
  if (!err) {
      console.log('directory1 exists');
  }
  else if (err.code === 'ENOENT') {
      console.log('directory1 does not exist');
  }
});

fs.stat('/client/build/', function(err) {
  if (!err) {
      console.log('file or directory exists');
  }
  else if (err.code === 'ENOENT') {
      console.log('file or directory does not exist');
  }
});
/* Serve the static files from the React app */
app.use(express.static(path.join(__dirname, '/client/build')));

/* Handles any requests that don't match the ones above*/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
