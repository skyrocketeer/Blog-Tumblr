const router = require('express').Router();
const mongoose = require('mongoose');
let User = require('../models/User');

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const age = req.body.age;
  
    const newUser = new User({username, age});

    newUser.save()
      .then(() => res.json('User added!'))
      .catch( err => res.status(400).json('err: ' + err))
});

router.route('/:id').get((req, res) => {
    User.findById(mongoose.Types.ObjectId(req.params.id))
      .then(user => res.json(user))
      .catch(err => res.status(400).json('err: ' + err))
});

router.route('/:id/delete').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(user => res.json('User deleted'))
      .catch(err => res.status(400).json('err: ' + err))
});

router.route('/:id/update').put((req, res) => {
    User.findById(req.params.id)
      .then(user => { 
        user.username = req.body.username;
        user.save()
          .then(() => res.json('User updated'))
          .catch(err => res.status(400).json('err: ' + err))
      })
      .catch(err => res.status(400).json('err: ' + err))
});

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('err: ' + err))
});

module.exports = router;