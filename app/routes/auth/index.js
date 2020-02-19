const router = require('express').Router();
const passport = require('passport');
const User = require('../..//models/User'); 

router.route('/register').post( function(req, res, next) {
  try{
    User.findOne({ email: req.body.email }, function(err, user){
      if(err) {
        throw err;
        // return res.json({ message: error })
      }
      if(user) {
        return res.send(409, { message: 'Email is already taken' });
      } else {
        return res.json({ message:'Registration successful' });
      }
    })
  }
  catch(err){
    res.send(500, { message: 'server error' })
  }
});

router.route('/login').post( function(req, res, next) {
  passport.authenticate('local-login', { session: false }, function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send(401,{ success : false, message : 'authentication failed' });
    }
    // ***********************************************************************
    // "Note that when using a custom callback, it becomes the application's
    // responsibility to establish a session (by calling req.login()) and send
    // a response."
    // Source: http://passportjs.org/docs
    // ***********************************************************************
    req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.send({ success : true, message : 'authentication succeeded' });
    });      
  })(req, res, next);
});

module.exports = router;