// home handlers
var db = require("../database");


module.exports = function(req, reply) {
	

		db.getAllblogPosts(function (err, result) {
			reply.view("bloglist", {
				blogs: result
			});
	});
}
