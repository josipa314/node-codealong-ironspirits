console.log("hello world");

const express = require('express');

const app = express();
// We create our own server named app
// Express server will be handling requests and responses

//const express = require('express');
//const app = express();

//////Now we used the HTTP verbs:
// app.get(path, code);

app.use(express.static('public'));


app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});


app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html');
});


app.listen(3001, () => {
    console.log("server listening to requests...")
});


