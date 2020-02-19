const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    nickname: String,
    zodiac_sign: {
        id: Number,
        text: String
    }
    // facebook: {
    //     id: String,
    //     token: String,
    //     email: String,
    //     name: String
    // },
    // twitter: {
    //     id: String,
    //     token: String,
    //     displayName: String,
    //     username: String
    // },
    // google: {
    //     id: String,
    //     token: String,
    //     email: String,
    //     name: String
    // }
},{
    timestamps: true
})

//hashing
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// kiểm tra password có hợp lệ không
userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);