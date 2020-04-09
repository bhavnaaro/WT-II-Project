
const express = require('express');
const app = express();

data = {
    name: "abc", pos: "coder"
}
module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send("this is home")
    })

    app.get('/user', (req, res) => {
        //res.render('home', { data: data })
        res.render('newuser')
    })


    app.get('/course/:id', (req, res) => {
        res.send('you requested course no ' + req.params.id)
    })

    app.get('/about', (req, res) => {
        res.render('about')
    })

    app.post('/user', function (req, res) {
        var userInfo = req.body; //Get the parsed information
        console.log("@@@ req recd is"+userInfo)
        if (!userInfo.name || !userInfo.age || !userInfo.gender ||!userInfo.position) {
            res.render('show_message', {
                message: "Sorry, you provided worng info", type: "error"
            });
        } else {
            var newuser = new Customer({
                name: userInfo.name,
                age: userInfo.age,
                gender: userInfo.gender,
                position: userInfo.position

            });

            newCustomer.save(function (err, Customer) {
                if (err)
                    res.render('show_message', { message: "Database error", type: "error" });
                else
                    res.render('show_message', {
                        message: "New Customer added", type: "success", customer: userInfo
                    });
            });
        }
    });



}