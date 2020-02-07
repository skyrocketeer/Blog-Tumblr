const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userCollection = new Schema({
    _id: {
        type: String
    },
    username:{
        type: String,
        required: true,
        unique: true,
        minlength: 6
    }, 
    age : {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userCollection);

module.exports = User;