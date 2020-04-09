const express = require('express')
const app = express();
const bosyParser = require('body-parser')
const port = 5000;


app.use(express.static('public'))
//import routes
require('./routes')(app)

app.set('view engine', 'ejs')


app.listen(port, () => {
    console.log("Server is running at" + port)
})
