let express = require('express');

app = express();


app.get('/', function(request, response) {
    response.send("Hello Express!");
});

app.listen(8000, function() {
    console.log('Server running on port 8080');
})