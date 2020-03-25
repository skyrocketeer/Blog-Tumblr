const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv'); 
const session = require('express-session');
const passport = require('passport');
const errorHandler = require('errorhandler');
const dbConfig = require('./config/database.js');
const port = process.env.PORT || 6000;

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(express.json());
dotenv.config();

//log error if in dev mode
const isProduction = process.env.NODE_ENV === 'production';
if(!isProduction) {
  app.use(errorHandler());
}

//Enabling CORS Pre-Flight
app.options('*', cors());

// passport config
require('./config/passport')(passport);
app.use(session({ secret: 'cat passport', resave: false, saveUninitialized: false })); // chuối bí mật đã mã hóa cookie
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//routes
const routes = require('./app/routes');
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});

/* Serve the static files from the React app */
// app.use( '/static', express.static(path.join(__dirname, '/views/build/static/')) );
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'views/build', 'index.html'));
// });