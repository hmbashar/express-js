let express = require('express');

app = express();


// app.get('/one', function(request, response) {
//     response.send("This is simple string response");
// });
//
// app.post('/two', function(request, response) {
//     response.send("This is simple string response two");
// });

app.get('/one', function(request, response) {
    response.end("This is simple string response");
});

app.post('/two', function(request, response) {
    response.end("This is simple string response two");
});

//Response Status Code
app.get('/three', function(request, response) {
    response.status(201).end("Unauthorized code");
});

//JSON Response
app.get('/four', function(request, response) {
   let MyJsonArry = [
       {
           Name: "John Doe",
           City: "Dhaka",
           Occupation: "Developer"
       },
       {
           Name: "Bashar",
           City: "Patuakhali",
           Occupation: "Developer"
       },
       {
           Name: "Shamim",
           City: "Patuakhali",
           Occupation: "Student"
       }
   ];
    response.json(MyJsonArry);
});


//Download Response
app.get("/five", function(req, res) {
    res.download("./assets/express-download.jpg")
});

//Redirect Response
app.get("/Bangladesh", function(req, res) {
    res.redirect("http://localhost:8000/India")
});


app.get("/India", function(req, res) {
    res.send("India");
});

//Header response Key added
app.get("/Six", function(req, res) {

    res.append('name', "Md Abul Bashar");
    res.append('City', "Patuakhali");
    res.append('age', "30 Years Old");

    res.status(201).end("Hello World!");
});


//Header cookies response
app.get("/Seven", function(req, res) {

    res.cookie('name', "Md Abul Bashar");
    res.cookie('City', "Patuakhali");
    res.cookie('age', "30 Years Old");

    res.end("Hello World! From Cookie");
});

//Header cookies clear response
app.get("/Eight", function(req, res) {

    res.clearCookie('name');
    res.clearCookie('City');
    res.clearCookie('age');

    res.end("Cookie Clear successfully!");
});

//request query
app.get("/Nine", function(req, res) {

    let firstname = req.query.firstname;
    let lastname = req.query.lastname;
    res.send(firstname + " " + lastname);
});


//request header
app.get("/Ten", function(req, res) {

    let firstname = req.header('firstName');
    let lastname = req.header('lastName');
    let userAgent = req.header('User-Agent');
    res.end(firstname + " " + lastname + " " + userAgent);
});

app.listen(8000, function() {
    console.log('Server running on port 8000');
})