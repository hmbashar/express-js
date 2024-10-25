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

app.listen(8000, function() {
    console.log('Server running on port 8000');
})