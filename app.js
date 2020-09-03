/* SERVER */

//Require express module
const express = require("express");

//Require body-parser module
const bodyParser = require("body-parser");

//Require the date.js local module
const date = require(__dirname + "/date.js");
//console.log(date());

//Initialize a new express app
const app = express();

//Grab the value entered the text box in list.ejs - newItem
let items = [];

//Grab the value entered in the text box in the list.ejs for the work route
let workItems = [];

//Tell the app to use EJS as its view engine
app.set("view engine", "ejs");

//Tell the app to use body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));

//Tell the app to use all the statics files inside the public folder
app.use(express.static("public"));

//Create the first get route on the home route
app.get("/", function(req, res) {

  //Get the full date
  //let day = date.getDate();

  //Get the day of the week only
  let day = date.getDay();

  res.render("list", {
    listTitle: day,
    newListItems: items
  });


  //Below how do to using Switch statement

  // var currentDay = today.getDay();
  //
  // //Check if the current day is a saturday or a sunday
  // var day = "";
  //
  // //If there are more than 5 if else statements use a switch statement
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     //Throw an error when the current day is not covered by any of the cases (will not happen because all days are there)
  //     console.log("Error: current day is equal to" + currentDay);
  //}

  // if (currentDay === 6) {
  //   day = "Saturday";
  // } else if (currentDay === 0) {
  //   day = "Sunday";
  // } else if (currentDay === 1) {
  //   day = "Monday";
  // } else if (currentDay === 2) {
  //   day = "Tuesday";
  // } else if (currentDay === 3) {
  //   day = "Wednesday";
  // } else if (currentDay === 4) {
  //   day = "Thursday";
  // } else if (currentDay === 5) {
  //   day = "Friday";
  // }


});

//Catch the POST request made to the route (/)
app.post("/", function(req, res) {

  //Grab the value entered the text box in list.ejs - newItem
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    //Append item to the array workItems
    workItems.push(item);

    //Redirect to the work route -> app.get("/work", function(req, res) {
    res.redirect("/work");
  } else {
    //Append item to the array items
    items.push(item);
    res.redirect("/");
  }

  console.log(item);
  console.log(req.body);
});

//Create the work get route
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});


app.get("/about", function(req, res) {
  res.render("about");
});

//Set up the server to listen to port 3000
app.listen(3000, function() {
  console.log("Server running on port 3000");
});