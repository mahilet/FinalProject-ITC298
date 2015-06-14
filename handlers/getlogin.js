//get login handler
var db = require("../database");

module.exports = function(req, reply){


      reply.view("login",{

      
        welcome:"here you enter your login"
      });
    }


