// Require NPM packages
const express = require('express');
const bodyParser = require('body-parser');

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
    const today = new Date();
    // convert to shorthand Locale
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',};
        let day = today.toLocaleDateString('en-US', options)
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
})


app.listen(3000, function() {
    console.log("server running port 3000");
})

