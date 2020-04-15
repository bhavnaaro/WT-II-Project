const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaCourse = new Schema({
  courseName: {
    type: String
  },
  description: {
    type: String
  },
  courseId: [
    {
      type: Number,
      required: true
    }
  ],
  startDate: {
    type: Date
  },
  duration: {
    type: String
  },
  instructorEmail: [
    {
      type: String,
      ref: "instructor"
    }
  ],
  mobileno: {
    type: String
  }
});

const Course= mongoose.model("Course", schemaCourse);
module.exports = Course;