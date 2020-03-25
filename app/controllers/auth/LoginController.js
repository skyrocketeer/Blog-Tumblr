const passport = require('passport');
const User = require('../../models/User'); 
const { check, validationResult } = require('express-validator');

function login(req,res,next){
   check(req.email).normalizeEmail().isEmail(),
   check(req.password).isLength({ min:6 })

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
   }

   passport.authenticate('local-login', { session: false }, function(err, user, info) {
      User.findOne({ email: req.email }, function(err, user) {
         if(err) return res.status(500).json({ message: 'Server error' })

         if (!user) return res.status(401).send({ msg: 'The email address ' + req.email + ' is not associated with any account. Double-check your email address and try again.'});
      })
   })
}


//    if (err) {
//      return next(err); // will generate a 500 error
//    }
//    // Generate a JSON response reflecting authentication status
//    if (! user) {
//      return res.send(401,{ success : false, message : 'authentication failed' });
//    }
//    // ***********************************************************************
//    // "Note that when using a custom callback, it becomes the application's
//    // responsibility to establish a session (by calling req.login()) and send
//    // a response."
//    // Source: http://passportjs.org/docs
//    // ***********************************************************************
//    req.login(user, loginErr => {
//      if (loginErr) {
//        return next(loginErr);
//      }
//      return res.send({ success : true, message : 'authentication succeeded' });
//    });      
//  })(req, res, next);

module.exports = login;