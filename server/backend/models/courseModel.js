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
  desc: {
    type: String
  }
  
  
 
 
  
  
});

const Course= mongoose.model("Course", schemaCourse);
module.exports = Course;
