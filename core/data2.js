let someData = "<ul><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li><li>Sunday</li></ul>";

let jsondata1 = ["Artist: Ariana Grande"]
let jsondata2 = ["Artist: Travis Scott"]

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return someData;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
          return jsondata1;
  }
}

var someOtherFunction = function () {
    console.log("Can't touch this!");
}