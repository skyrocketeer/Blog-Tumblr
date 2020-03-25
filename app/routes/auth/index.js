const router = require('express').Router();
const registerController = require('../../controllers/auth/RegisterController');
const verifyEmail = require('../../controllers/auth/VerifyEmailController');
const loginController = require('../../controllers/auth/LoginController');

router.route('/register').post(function (req,res,next) {
  registerController(req.body,res,next)
});
router.route('/user/:userId/verification').post(function (req,res,next) {
  verifyEmail(req.body,res,next)
});

router.route('/login').post( function(req, res, next) {
  loginController(req.body,res,next)
});

module.exports = router;