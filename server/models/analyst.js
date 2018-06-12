const mongoose = require('mongoose');
const { Schema } = mongoose;

const GFS = mongoose.model(
  'GFS',
  new Schema({}, { strict: false }),
  'profiles.files'
);

analystSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  analystImage: { type: Schema.Types.ObjectId, ref: 'GFS' }
});

module.exports = mongoose.model('analyst', analystSchema);
