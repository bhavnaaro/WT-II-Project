const mongoose = require("mongoose")

const schema = new mongoose.Schema({

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
    }
})


const Instructor = mongoose.model("Instructor", schema);

module.exports = Instructor;