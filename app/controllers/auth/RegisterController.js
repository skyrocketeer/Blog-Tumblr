const User = require('../../models/User'); 
const { check, validationResult } = require('express-validator');

async function register (req, res, next) {
  check(req.email).normalizeEmail().isEmail(),
  check(req.password).isLength({min:6})

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  
  try{
    await User.findOne({ email: req.email }, function(err, user){
      if(err) {
      return res.status(500).json({ message: 'Server error' })
      }
      if(user) {
        return res.status(409).json({ message: 'Email is already taken' });
      } else {
        let newUser = new User();
      // lưu thông tin cho tài khoản local
        newUser.email = req.email;
        newUser.password = newUser.generateHash(req.password);
        newUser.nickname = req.nickname;
        newUser.zodiac_sign.id = req.sign.id;  
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
}

module.exports = register;