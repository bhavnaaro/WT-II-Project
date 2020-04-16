var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test1', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("db is connected")
});

var courseSchema = new mongoose.Schema({ 
    id: 'number',
    name: 'string', 
    details:'string',
    category:'string'

});

var custSchema = new mongoose.Schema({
    //id: 'number',
    name: 'string',
    position: 'string',
    age:'number',
    gender:'string',
    //courses: [String]

});
var Course = mongoose.model('Course', courseSchema);
var Customer = mongoose.model('Customer', custSchema);