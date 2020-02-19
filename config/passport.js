const LocalStrategy = require('passport-local').Strategy;
const User = require('../app/models/User');

module.exports = function (passport) {
  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session
  // used to serialize the user for the session
  // The typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  // =========================================================================
  // LOCAL REGISTER ============================================================
  // =========================================================================
  // passport.use('local-register', new LocalStrategy({
  //   // mặc định local strategy sử dụng username và password,
  //   // chúng ta cần cấu hình lại
  //   usernameField: 'email',
  //   passwordField: 'password',
  //   passReqToCallback: true // supply verify callback
  // },
  //   function (req, email, password, done) {
  //     // asynchronous
  //     // Tìm một user theo email
  //     // chúng ta kiểm tra xem user đã tồn tại hay không
  //     User.findOne({ email: email }, function (err, user) {
  //       if (err)
  //         return done(err);
  //       if (user) {
  //         return done(null, false, { 'message': 'Email is already taken' });
  //       } else {
  //         // Nếu chưa user nào sử dụng email này
  //         // tạo mới user
  //         let newUser = new User();
  //         console.log('sdf');
  //         // lưu thông tin cho tài khoản local
  //         newUser.email = req.body.email;
  //         newUser.password = newUser.generateHash(req.body.password);
  //         newUser.nickname = req.body.nickname;
  //         newUser.zodiac_sign = req.body.zodiac_sign;
          
  //         // lưu user
  //         newUser.save(function (err) {
  //           if (err)
  //             throw err;
  //           return done(null, newUser);
  //         });
  //       }
  //     });
  //   }));
};