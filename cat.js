const fs = require("fs");

function cat(file) {
  fs.readFile("./" + file, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  });
}

module.exports = cat;
