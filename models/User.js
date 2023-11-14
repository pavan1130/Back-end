const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// const mongoose = require('mongoose');

// const reviewSchema = new mongoose.Schema({
//   review_id: { type: String, required: true },
//   text: { type: String, required: true },
// });

// const subscriptionDetailsSchema = new mongoose.Schema({
//   subscription_id: { type: String, required: true },
//   details: { type: String, required: true },
// });

// const meetingSessionSchema = new mongoose.Schema({
//   meeting_id: { type: String, required: true },
//   details: { type: String, required: true },
//   date: { type: Date, required: true },
//   time: { type: String, required: true },
// });

// const availabilitySlotSchema = new mongoose.Schema({
//   start_time: { type: String, required: true },
//   end_time: { type: String, required: true },
// });

// const upcomingMeetingSchema = new mongoose.Schema({
//   meeting_id: { type: String, required: true },
//   details: { type: String, required: true },
//   date: { type: Date, required: true },
//   time: { type: String, required: true },
// });

// const sessionHistorySchema = new mongoose.Schema({
//   session_id: { type: String, required: true },
//   details: { type: String, required: true },
//   date: { type: Date, required: true },
//   time: { type: String, required: true },
// });

// const userSchema = new mongoose.Schema({
//   user_id: { type: String, required: true },
//   username: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['mentor', 'mentee'], required: true },
//   profile: {
//     full_name: { type: String, required: true },
//     profile_picture: { type: String },
//     bio: { type: String },
//     subscriptions: {
//       active: [subscriptionDetailsSchema],
//       past: [subscriptionDetailsSchema],
//       inactive: [subscriptionDetailsSchema],
//     },
//     performance: {
//       mentee_performance: { type: String },
//       earnings_and_revenue: {
//         earnings: { type: Number },
//         revenue: { type: Number },
//       },
//     },
//     kpi: {
//       rating_and_reviews: {
//         rating: { type: Number },
//         reviews: [reviewSchema],
//       },
//       projections: { type: String },
//     },
//     commitments: {
//       upcoming_meetings: [upcomingMeetingSchema],
//       upcoming_sessions: [meetingSessionSchema],
//     },
//     availability_settings: {
//       availability_calendar: {
//         date: { type: Date },
//         time_slots: [availabilitySlotSchema],
//       },
//       session_preferences: [String],
//     },
//     mentee_requests: {
//       pending_requests: [subscriptionDetailsSchema],
//       accepted_requests: [subscriptionDetailsSchema],
//     },
//     session_history: {
//       completed_sessions: [sessionHistorySchema],
//     },
//     account_settings: {
//       change_password: {
//         old_password: { type: String, required: true },
//         new_password: { type: String, required: true },
//         confirm_password: { type: String, required: true },
//       },
//     },
//   },
// });

// const UserModel = mongoose.model('User', userSchema);

// module.exports = UserModel;
