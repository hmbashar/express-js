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


app.get('/three', function(request, response) {
    response.status(201).end("Unauthorized code");
})

app.listen(8000, function() {
    console.log('Server running on port 8000');
})