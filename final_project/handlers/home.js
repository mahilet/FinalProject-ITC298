// home handlers
var db = require("../database");


module.exports = function(req, reply) {
	if(!req.state){
		return reply.redirect("/login")
	}else

		db.getAllblogPosts(function (err, result) {
			reply.view("bloglist", {
				blogs: result
			});
	});
}
