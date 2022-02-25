const { Schema, model } = require("mongoose");
const dailyFormSchema = require("./Form");
const bcrypt = require("bcrypt");
require('moment');

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

  settings: {
    music:{
      type:Boolean,
      default:false,
    },
    meals:{
      type:Boolean,
      default:false
    },
    substance:{
      type:Boolean,
      default:false
    },
    meditation:{
      type:Boolean,
      default:false
    },
    exercise:{
      type:Boolean,
      default:false
    },
    reminders:{
      type:Boolean,
      default:false
    }
  }
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
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