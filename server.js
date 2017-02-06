var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 4568);
console.log("My app listen at 4568");
module.exports = app;
