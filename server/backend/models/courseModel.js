const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaCourse = new Schema({
  courseID:{
    type:Number,
    required:true
  },
  courseName: {
    type: String
  },
  description: {
    type: String
  },
  courseId: 
    {
      type: Number,
      required: true
    }
  
 
 
  
  
});

const Course= mongoose.model("Course", schemaCourse);
module.exports = Course;
