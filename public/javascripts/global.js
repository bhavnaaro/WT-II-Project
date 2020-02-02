// Userlist data array for filling in info box
var userListData = [];
var userCourseData = [];

// DOM Ready =============================================================
$(document).ready(function () {
    // Populate the user table on initial page load
    populateTable();
    populateCourseTable();

    // adding link to the username
    $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);
    $('#courseList table tbody').on('click', 'td a.linkshowcourse', showCourseInfo);

    $('#btnAddUser').on('click', addUser);
    $('#btnAddUser').on('click', addCourse);

});

// Functions =============================================================

// Fill table with data
function populateTable() {
    // Empty content string
    var tableContent = '';
    // jQuery AJAX call for JSON
    $.getJSON('/users/userlist', function (data) {
        userListData = data;
        // getting all the data from the db and storing it in the global variable so that we don't have to get data from the DB again and again. THIS WOULD BE A BAD IDEA FOR A PRODUCTION LEVEL APP AS THIS WOULD LOAD TENS OF THOUSANDS OF USERS ALL AT ONCE!! In that case, implement paging and only load the data you need at that time.

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function () {
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};

// Fill table with data
function populateCourseTable() {
    // Empty content string
    var tableContent = '';
    // jQuery AJAX call for JSON
    $.getJSON('/users/courselist', function (data) {
        userCourseData = data;
        // getting all the data from the db and storing it in the global variable so that we don't have to get data from the DB again and again. THIS WOULD BE A BAD IDEA FOR A PRODUCTION LEVEL APP AS THIS WOULD LOAD TENS OF THOUSANDS OF USERS ALL AT ONCE!! In that case, implement paging and only load the data you need at that time.

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function () {
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowcourse" rel="' + this.coursename + '">' + this.coursename + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeletecourse" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#courseList table tbody').html(tableContent);
    });
};

// Show User Info
function showUserInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = userListData.map(function (arrayItem) {
        return arrayItem.username;
    }).indexOf(thisUserName);

    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    console.log(thisUserObject);

    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);
};

function showCourseInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisCourseName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = userCourseData.map(function (arrayItem) {
        return arrayItem.coursename;
    }).indexOf(thisCourseName);

    // Get our User Object
    var thisCourseObject = userCourseData[arrayPosition];

    console.log(thisCourseObject);

    //Populate Info Box
    $('#courseInfoName').text(thisCourseObject.coursename);
    $('#courseInfoInstructor').text(thisCourseObject.instructor);
    $('#userInfoDetails').text(thisCourseObject.details);
    $('#userInfoDuration').text(thisCourseObject.duration);
    $('#userInfoLocation').text(thisCourseObject.location);
    $('#userInfoPayment').text(thisCourseObject.payment);


};

//Add a user:
// Add User
function addUser(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addUser input').each(function (index, val) {
        if ($(this).val() === '') {
            errorCount++;
        }
    });

    // Check and make sure errorCount's still at zero
    if (errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'username': $('#addUser fieldset input#inputUserName').val(),
            'email': $('#addUser fieldset input#inputUserEmail').val(),
            'fullname': $('#addUser fieldset input#inputUserFullname').val(),
            'age': parseInt($('#addUser fieldset input#inputUserAge').val(), 10),
            'location': $('#addUser fieldset input#inputUserLocation').val(),
            'gender': $('#addUser fieldset input#inputUserGender').val()
        }


        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function (response) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addUser fieldset input').val('');

                // Update the table
                populateTable();

            } else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    } else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

function addCourse(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addCourse input').each(function (index, val) {
        if ($(this).val() === '') {
            errorCount++;
        }
    });

    // Check and make sure errorCount's still at zero
    if (errorCount === 0) {

        // If it is, compile all user info into one object
        var newCourse = {
            'coursename': $('#addCourse fieldset input#inputCourseName').val(),
            'instructor': $('#addCourse fieldset input#inputCourseInstructor').val(),
            'details': $('#addCourse fieldset input#inputCourseDetails').val(),
            'duration': parseInt($('#addCourse fieldset input#inputCourseDuration').val(), 10),
            'location': $('#addCourse fieldset input#inputUserLocation').val(),
            'payment': $('#addCourse fieldset input#inputCoursePayment').val()
        }


        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newCourse,
            url: '/users/addcourse',
            dataType: 'JSON'
        }).done(function (response) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addCourse fieldset input').val('');

                // Update the table
                populateCourseTable();

            } else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    } else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};