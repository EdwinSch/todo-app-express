// Require NPM packages
const express = require('express');
const bodyParser = require('body-parser');
// Require custom modules/components
const date = require(__dirname + "/modules/date.js");

// use NPM packages
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
// serve stylesheet 
app.use(express.static("public"));

// declare items array globally
let items = []; 

// Tell express to use EJS as view engine
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    // call getDate function from date.js module
    let day = date();

    // render page and pass variables to: list.ejs  
    res.render('list', {kindOfDay: day, newListItems: items})
});


app.post("/", function(req,res) {
    // get user input form value
    let item = req.body.newItem;
    // push new user item to items array
        items.push(item);
    // pass to GET function and post to server
    res.redirect("/");
});


app.listen(3000, function() {
    console.log("server running port 3000");
});

