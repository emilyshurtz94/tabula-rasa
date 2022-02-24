const { Schema, model } = require("mongoose");
const dailyFormSchema = require("./Form");
const bcrypt = require("bcrypt");
require('moment');
// const musicSchema = new Schema({
//   music: [
//     {
//       type: Boolean,
//       recap: Date
//     },
    
//   ],
// });

// const workoutSchema = new Schema({
//   workout: {
//     type: Boolean,
//   },
// });

// const mealsSchema = new Schema({
//   meals: [
//     {
//       type: Boolean,
//     },
//   ],
// });

// const meditationSchema = new Schema({
//   meditation: {
//     type: Boolean,
//   },
// });

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },

  dailyForm: [dailyFormSchema],
});

profileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model(
  "User",
  userSchema,
  musicSchema,
  workoutSchema,
  mealsSchema,
  meditationSchema
);

module.exports = User;