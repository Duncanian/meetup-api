import mongoose from 'mongoose';
/**
 * Schema for the meetups collection
 */
const MeetupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  }
});

export default mongoose.model('MeetUp', MeetupSchema);
