const { Schema, model, Types } = require("mongoose");

const dailyFormSchema = new Schema({
  formID: {
    type: Schema.Types.ObjectId,
    Default: () => new Types.ObjectId(),
  },

  music: [
    {
      type: Boolean,
      recap: Date
    }
  ],

  workout: {
    type: Boolean,
  },

  meals: [
    {
      type: Boolean,
    }
  ],

  meditation: {
    type: Boolean,
  },
});

module.exports = dailyFormSchema;
