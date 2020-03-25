const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        unique: true, 
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
    },
    password: String,
    nickname: String,
    zodiac_sign: {
        id: Number,
        text: String
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    isVerified: {
        type: Boolean,
        default: false
    },
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
    let hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    return hash;
};

// kiểm tra password có hợp lệ không
userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);