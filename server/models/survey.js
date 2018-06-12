const mongoose = require('mongoose');
const { Schema } = mongoose;

surveySchema = new Schema({
  rating: {
    type: Number,
    required: true
  },
  surveyText: String,
  analystId: {
    type: Schema.Types.ObjectId,
    ref: 'analyst'
  },
  ticketId: String,
  surveyDate: {
    type: Date
  }
});

module.exports = mongoose.model('surveys', surveySchema);
