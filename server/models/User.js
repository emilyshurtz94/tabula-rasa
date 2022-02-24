const { Schema, model } = require('mongoose');
const dailyFormSchema = require('./Form');

const userSchema = new Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    dailyForm: [
        dailyFormSchema
    ]
})

const User = model('User', userSchema);

module.exports = User;