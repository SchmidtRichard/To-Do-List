//Check the current day of the week happens to be on a weekend

//Change the function to a variable (getDate) binded to an anonymous function
//module.exports.getDate = function() { - short version below
exports.getDate = function() {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  //let day = today.toLocaleDateString("en-USD", options);
  //return day;

  //Short version of the above code
  return today.toLocaleDateString("en-USD", options);
};

//Change the function to a variable (getDate) binded to an anonymous function
//module.exports.getDay = function() { - short version below
exports.getDay = function() {

  let today = new Date();

  let options = {
    weekday: "long"
  };

  // let day = today.toLocaleDateString("en-USD", options);
  // return day;

  return today.toLocaleDateString("en-USD", options);
};

console.log(module.exports);