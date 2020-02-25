const router = require('express').Router();
const passport = require('passport');
const User = require('../../models/User'); 

router.route('/register').post( async function(req, res, next) {
  try{
    await User.findOne({ email: req.body.email }, function(err, user){
      if(err) {
        return res.status(500).json({ message: 'Server error' })
      }
      if(user) {
        return res.status(409).json({ message: 'Email is already taken' });
      } else {
        let newUser = new User();
      // lưu thông tin cho tài khoản local
        newUser.email = req.body.email;
        newUser.password = newUser.generateHash(req.body.password);
        newUser.nickname = req.body.nickname;
        newUser.zodiac_sign.id = req.body.sign.id;  
      // lưu user
        newUser.save( function(err){
          if(err) throw err
          return res.json({ message:'Registration successful' });
        });
      }
    })
  }catch(err){
    console.log(err)
    res.status(500).json({ message: 'Server error' })
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