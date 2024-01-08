const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  
 

  feedbackDate: {
    type: Date,
    // required: true,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
