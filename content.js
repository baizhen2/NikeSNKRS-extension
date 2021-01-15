/*const fs = require('fs');

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        return cb && cb(err);
      }
      try {
        const object = JSON.parse(fileData);
        return cb && cb(null, object);
      } catch (err) {
        return cb && cb(err);
      }
    });
  }

jsonReader("./info.json", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    data.pageOne[0].email = 'bob@gmail.com';
    fs.writeFile("./info.json", JSON.stringify(data, null, 2), err => {
      if (err) console.log("Error writing file:", err);
    });
});
*/
