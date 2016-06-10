var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 1337;

var quotes = [];

app.use(bodyParser.json());

app.get('/quotes', (req, res) => {
    res.status(200).json({
        quotes
    });
});

app.post('/quotes', (req, res) => {
    var quote = req.body;
    console.log(quote);

    if (quote) {
        quotes.push(quote);
    }

    res.json(quotes).status(200);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
