
// home handlers
var db = require("../database");

module.exports = function(req, reply) {

		db.getAllblogPosts(function (err, result) {
			result.forEach(function (blogpost) {
            blogpost.small = blogpost.comment.substr(0, 100);
        });

			reply.view("bloglist", {
				blogs: result
			});
	});
}

