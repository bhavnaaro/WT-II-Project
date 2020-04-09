const express = require("express");
const router = express.Router();
const studentRoutes = express.Router();
const StudentModel = require("./studentSchema");


const mongoose = require("mongoose");


//Get all student details
studentRoutes.route("/").get(function(req, res) {
  StudentModel.find(function(err, student) {
    if (err) {
      console.log(err);
    } else {
      res.json(student);
    }
  });
});

studentRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  StudentModel.findById(id, function(err, students) {
    res.json(students);
  });
});

//Add new student to db
studentRoutes.route("/add").post(function(req, res) {
  // let student = new studentModel(req.body);
  // student
  //   .save()
  //   .then(student => {
  //     res.status(200).json({ student : "student added successfully" });

  //   })
  //   .catch(err => {
  //     res.status(400).send("Adding new student failed");
  //   });

  StudentModel.find({
    studentID: req.body.studentID
  })
    .exec()
    .then(student => {
      if (student.length >= 1) {
        res.status(409).json({
          message: "Student already exists"
        });
      } else {
        const studentModel = new StudentModel({
          _id: mongoose.Types.ObjectId(),
          studentName: req.body.studentName,
          studentID: req.body.studentID,
          email: req.body.email,
          password: req.body.password,
          course: req.body.course,
          userType: "student"
        });

        studentModel
          .save()
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "student added",
              createdStudent: result
            });
          })
          .catch(err => {
            console.log(err.message);
            res.status(500).json({
              error: err
            });
          });
      }
    });
  });


    
//Update the student details
studentRoutes.route("/update/:id").post(function(req, res) {
  StudentModel.findById(req.params.id, function(err, studentmodel) {
    if (!studentmodel) res.status(404).send("Data is not found");
    else studentmodel.studentName = req.body.studentName;
    studentmodel.studentID = req.body.studentID;

    studentmodel.email = req.body.email;
    studentmodel.password = req.body.password;
    studentmodel.course = req.body.course;
    studentmodel
      .save()
      .then(studentmodel => {
        res.json("student Updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

// Delete the student
studentRoutes.route("/delete/:id").delete(function(req, res) {
  StudentModel.findOneAndDelete({ _id: req.params.id }, function(
    err,
    studentmodel
  ) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = studentRoutes;
