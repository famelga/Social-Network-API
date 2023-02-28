const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// Need to import Dateformat function
const thoughtSchema = new Schema (
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    //   Write function later
      get: timeStamp => dateFormat (timeStamp),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        reactionSchema,
    ]
  },
{
    toJSON: {
        getters: true,
    },
    id: false,
}
);

thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
})

const Thought  = model("Thought", thoughtSchema);

module.exports = Thought;