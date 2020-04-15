const mongoose = require('mongoose');


const Schema = new mongoose.Schema({


    CourseId: {
        type: Number,
        ref: "Course"
    },

    CourseName: {
        type: String
    },

    Location: {
        type: String
    },
    Date: {
        type: Date

    },
    
    duration: {
        type: String
    },

   instructorName:{
       type: String,
       ref: "Instructor"
   }

});



const Calendar = mongoose.model("Calendar", schema);

module.exports = Calendar;
