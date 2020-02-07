const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportCollection = new Schema({
    _id: {type: String},
    name:{type: String, required: true, unique: true},
    description:{type: String}, 
    number_of_players:{type: Number} 
},{
    timestamps: true
});

const Sport = mongoose.model('Sport', sportCollection);

module.exports = Sport;