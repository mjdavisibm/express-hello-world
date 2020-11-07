var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express listening on Port ${port} ...`);
});
