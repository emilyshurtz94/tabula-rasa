const { Schema, model } = require('mongoose');

const signUpSchema = new Schema({

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
    }
})

const Signup = model('Signup', signUpSchema);

module.exports = Signup;