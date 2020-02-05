const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 6000;

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const conn = mongoose.connection
conn.once('open', _ => {
  console.log('Database connected:', uri)
})

conn.on('error', err => {
  console.error('connection error:', err)
})

/*Adds the react production build to serve react requests*/
app.use(express.static(path.join(__dirname, '../client/build')));

/*React root*/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
  });

const userRouter = require('./routes/users');
const sportRouter = require('./routes/sports');
app.use('/users', userRouter);
app.use('/sports', sportRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

