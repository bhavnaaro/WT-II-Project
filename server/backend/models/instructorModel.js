const mongoose = require("mongoose")

const schema = new mongoose.Schema({

    instructorID:{
        type: Number,
        required:true
    },
    instructorName: {
        type: String
    },

    email: {
        type: String

    },

    contactNumber: {
        type: Number
    },

    dept: {
        type: String
    },

    title: {
        type: String
    },

    password: {
        type: String

    },
    course:{
        type: String,
        ref: "Course"
    },

    shortDescs:{
        type: String
    },

    longDescs:{
        type: String
    },

    img:{
        type:String
    }
});


const Instructor = mongoose.model("Instructor", schema);

module.exports = Instructor;