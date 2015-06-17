//handler for bios
var db = require("../database");

  module.exports = function(req, reply) {
    db.getAllblogUsers(function (err, result) {
          reply.view("bios",{
            list:result

          });
    });
  }
