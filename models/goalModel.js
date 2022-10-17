import mongoose, { Schema } from 'mongoose';

// const GoalSchema = new Schema({
//   name: String,
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
// });


const GoalSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Goal = mongoose.models.Goal ||
  mongoose.model('Goal', GoalSchema)
export default Goal