const mongoose = require("mongoose")

const schema = new mongoose.Schema({

    adminID: {
        type: String,
        required: true
    },


    name: {
        type: String
    },

    email: {
        type: String

    },

    password: {
        type: String

    },

    userType: {
        type: String,
        required: true
    }

})


const Admin = mongoose.model("Admin", schema);

module.exports = Admin;