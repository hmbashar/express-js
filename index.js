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

app.listen(8000, function() {
    console.log('Server running on port 8000');
})