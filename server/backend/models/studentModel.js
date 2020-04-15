const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// let schemaStudent = new Schema({


const schema = new mongoose.Schema({
    studentName: {
        type: String
    },
    studentID: {
        type: Number,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    },

    course: {
        type: String,
        ref: "Course"
    }
});

// module.exports = mongoose.model("student", schemaStudent);

const Student = mongoose.model("Student", schema);

module.exports = Student;