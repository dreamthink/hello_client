var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.json({
        name: 'Kim Gordon',
        instrument: 'Bass'
    });
});

// app.get('/headers', function(request, response) {
// 		response.json({
			
// 		})
// });

app.listen(8080);