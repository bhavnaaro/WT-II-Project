const express = require("express");
const courseRoutes = express.Router();
const courseModel = require("../models/courseModel");

//Get all course details
courseRoutes.route("/all").get(function (req, res) {
  courseModel.find(function (err, course) {
    if (err) {
      console.log(err);
    } else {
      res.json(course);
    }
  });
});

courseRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  courseModel.findOne({ 'courseId': id }, function (err, courses) {
    res.json(courses);
    //res.send("this is course page");

    const axios = require('axios');
    url = "http://localhost:5000/api/v1.0/recommendations/3";
    axios.get(url)
      .then(response => {
        recc_course = response.data.data;
        console.log(recc_course);
        // console.log(response.data.explanation);
        // recc_course.forEach(myFunction);

        // function myFunction(item, index) {
        //   console.log( index + ":" + item['name']);
        // }
      })
      .catch(error => {
        console.log(error);
      });




    console.log("course page", courses);
  });
});

//Add new course to db
courseRoutes.route("/add").post(function (req, res) {
  let course = new courseModel(req.body);
  course
    .save()
    .then(course => {
      res.status(200).json({ course: "Course added successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new course failed");
    });
});


//Update the course details
courseRoutes.route("/update/:id").post(function (req, res) {
  courseModel.findOne({ 'courseId': id }, function (err, coursemodel) {
    if (!coursemodel) res.status(404).send("Data is not found");
    else coursemodel.courseName = req.body.courseName;
    coursemodel.description = req.body.description;
    coursemodel.instructorName = req.body.instructorName;
    coursemodel.startDate = req.body.startDate;
    coursemodel.duration = req.body.duration;
    coursemodel
      .save()
      .then(coursemodel => {
        res.json("Course Updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});
// Delete the course
courseRoutes.route("/delete/:id").delete(function (req, res) {
  courseModel.findOneAndDelete({ _id: req.params.id }, function (
    err,
    coursemodel
  ) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = courseRoutes;
