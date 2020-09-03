//Check the current day of the week happens to be on a weekend

//Change the function to a variable (getDate) binded to an anonymous function
//module.exports.getDate = function() { - short version below
exports.getDate = function() {

  const today = new Date();

  const options = {
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

  const today = new Date();

  const options = {
    weekday: "long"
  };

  // let day = today.toLocaleDateString("en-USD", options);
  // return day;

  return today.toLocaleDateString("en-USD", options);
};

console.log(module.exports);