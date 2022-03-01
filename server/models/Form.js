const { Schema, model, Types } = require("mongoose");
const dateFormat = require('../utils/dateFormat')

const dailyFormSchema = new Schema({
  formID: {
    type: Schema.Types.ObjectId,
    Default: () => new Types.ObjectId(),
  },

  feeling:{
    type: Boolean
  },

  createdAt:{
    type: Date,
    default: Date.now,
    get:(timestamp) => dateFormat(timestamp)
  }
});

module.exports = dailyFormSchema;
//test