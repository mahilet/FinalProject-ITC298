//get createpost
module.exports = function(req,reply) {
	   if(!req.state.session){
	    return reply.redirect("/login");
	  }else{
		  	reply.view("createpost.html");
		    }
  };