//Check the current day of the week happens to be on a weekend

module.exports.getDate = getDate;

//console.log(module);

function getDate() {

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
}

module.exports.getDay = getDay;

function getDay() {

  let today = new Date();

  let options = {
    weekday: "long"
  };

  // let day = today.toLocaleDateString("en-USD", options);
  // return day;

  return today.toLocaleDateString("en-USD", options);


}

console.log(module.exports);