var Post = require("../models/blogPosts");

module.exports = function(req, reply) {
	
  var payload = req.payload;
  var model = new Post(payload);
  model.save(function(err) {
    if (err) {
      console.error(err);
    }
       reply.redirect("/");
    console.log(model);
  });
};
