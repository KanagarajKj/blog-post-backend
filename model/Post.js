var mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    fullName: String,
    postHeading: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
