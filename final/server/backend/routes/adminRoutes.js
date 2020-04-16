const express = require("express");
const adminroutes = express.Router();
const Adminmodel = require("../models/adminModel");
const mongoose = require("mongoose");

//----------------------------------------------ADMIN RETRIEW ALL -------------
adminroutes.get("/",(req,res)=>{
    res.send("THIS IS THE ADMIN PAGE");
})


adminroutes.get("/admin/edit", (req, res) => {
    Adminmodel.find((err, admin) => {
        if (err) {
            console.log(err);
        } else {
            res.json(admin);
        }
    });
});
//--------------------------------------------------------------------------
adminroutes.get("/admin/edit/:id", (req, res) => {
    let id = req.params.id;
    Adminmodel.findById(id, (err, admin) => {
        res.json(admin);
    });
});

//--------------------------------------ADMIN ADD----------------------------------
adminroutes.post("/admin/add", (req, res) => {
    //let adminmodel  = new Adminmodel(req.body);

    // adminmodel.save().then( admin => {
    //     res.status(200).json({ "admin" :"admin added succesfuully" })
    // }).catch(err =>{
    //     res.status(400).send("adding new admin failed")
    // })
    //-------------------------

    Adminmodel.find({
        adminID: req.body.adminID
    })
        .exec()
        .then(admin => {
            if (admin.length >= 1) {
                res.status(409).json({
                    message: "Admin already exists"
                });
            } else {
                const adminmodel = new Adminmodel({
                    _id: mongoose.Types.ObjectId(),
                    adminID: req.body.adminID,
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    userType: "admin"
                });

                adminmodel
                    .save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: "admin added",
                            createdAdmin: result
                        });
                    })
                    .catch(err => {
                        console.log("hi ",err.message);
                        res.status(500).json({
                            error: err
                        });
                    });
            }
        })});

    //-----------------------------LOGIN--------------------

    //login
    adminroutes.post("/admin/login", (req, res) => {
        //console.log(req.body.adminID)
        Adminmodel.find({ adminID: req.body.adminID })
            .exec()
            .then(admin => {
                console.log(admin);
                if (admin.length < 1) {
                    return res.status(401).json({
                        message: "Authorization Failed!"
                    });
                }
                if (admin) {
                    //correct password
                    const token = jwt.sign(
                        {
                            id: admin[0]._id,
                            adminID: admin[0].adminID,
                            userType: admin[0].userType
                        },
                        JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    console.log(admin);
                    return res.status(200).json({
                        message: "Authorization Success",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Authorization Failed!"
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    });

    //------------------------------------ADMIN UPDATE-------------------------------
    adminroutes.post("/admin/update/:id", (req, res) => {
        Adminmodel.findById(req.params.id, (err, admin) => {
            if (!admin) {
                res.status(404).send("data is not found");
            } else {
                (admin.adminID = req.body.adminID), (admin.name = req.body.name);
                admin.mail = req.body.email;
                admin.password = req.body.password;

                admin
                    .save()
                    .then(admin => {
                        res.json("admin updated");
                    })
                    .catch(err => {
                        res.status(400).send("updated not succesful");
                    });
            }
        });
    });

    adminroutes.delete("/admin/delete/:id", (req, res) => {
        Adminmodel.findOneAndDelete({ _id: req.params.id }, (err, admin) => {
            if (err) {
                res.json(err);
            } else {
                res.json("deleted successfully");
            }
        });
    });

    // adminroutes.put("/admin/rtt", (req,res) =>{
    //     res.send({ type: "put"})
    // })

    // adminroutes.delete("/admin/de" ,(req,res) => {
    //     res.send({ type: "delete"})
    // })

    module.exports = adminroutes