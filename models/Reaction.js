const { Schema, model } = require('mongoose');
// Need to import Dateformat function

const reactionSchema = new Schema (
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    //   Write function later
      get: timeStamp => dateFormat (timeStamp),
    },
  },
{
    toJSON: {
        getters: true,
    },
    id: false,
}
);

module.exports = reactionSchema;
