
var fs = require('fs');
var settings = require('../settings');

exports.file = function(req, res, next) {
  if (req.files.file) {
    var file = req.files.file;
    var newName = Date.now() + '_' + file.name;
    fs.renameSync(file.path, settings.uploadDirectory + newName)
    return res.send(201); //created
  }
  return res.send(400); //bad request
};
