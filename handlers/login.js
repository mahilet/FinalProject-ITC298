//createpost handler
var db = require("../database");

module.exports = function(req, reply){
  
      var message = "Try Again!!!";

      var user = db.checkPasword(req.payload.user, function(err, result) {
          console.log(err, result, req.payload.password);
          // set cookie on response, get cookie on request
          if(result && req.payload.password == result.password) {
                var response = reply.redirect("/createpost");
                var id = Date.now();

                response.state("user", req.payload.user);
                response.state("session", id + "");

                console.log(req.payload.user, id);
                 
                db.connection.run("DELETE FROM users WHERE username = $username",{
                  $username:req.payload.username
              }
             
                  );
                } else {

                    reply.view("login",{
                      error:message
                    });
                }
          });
    };




  