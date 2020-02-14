const router = require('express').Router();
let Sport = require('../../models/Sport');

router.route('/').get((req, res) => {
    Sport.find()
    .then(sports => res.json(sports))
    .catch(err => res.status(400).json('err: ' + err))
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const number_of_players = Number(req.body.number);
    
    const newSport = new Sport({
        name,
        description,
        number_of_players
    });

    newSport.save()
      .then(() => res.json('Sport added!'))
      .catch( err => res.status(400).json('err: ' + err))
});

module.exports = router;