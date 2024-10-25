let express = require('express');

app = express();


app.get('/', function(request, response) {
    response.send("Hello Express!");
});
app.post('/about', function(request, response) {
    response.send("Hello Express! From About Page");
});
app.put('/contact', function(request, response) {
    response.send("Hello Express! from Contact Page");
});
app.delete('/team', function(request, response) {
    response.send("Hello Express! From Team");
});

app.listen(8000, function() {
    console.log('Server running on port 8000');
})