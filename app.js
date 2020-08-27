/* SERVER */

//Require express module
const express = require("express");

//Require body-parser module
const bodyParser = require("body-parser");

//Initialize a new express app
const app = express();

//Tell the app to use EJS as its view engine
app.set("view engine", "ejs");

//Create the first get route on the home route
app.get("/", function(req, res) {

  //Check the current day of the week happens to be on a weekend
  var today = new Date();
  var currentDay = today.getDay();

  //Check if the current day is a saturday or a sunday
  var day = "";

  //If there are more than 5 if else statements use a switch statement
  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      //Throw an error when the current day is not covered by any of the cases (will not happen because all days are there)
      console.log("Error: current day is equal to" + currentDay);
  }

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

  res.render("list", {
    kindOfDay: day
  });
});

//Set up the server to listen to port 3000
app.listen(3000, function() {
  console.log("Server running on port 3000");
});