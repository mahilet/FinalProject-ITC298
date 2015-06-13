var Backbone = require("backbone");
var db = require("../database");

  var BlogUser = Backbone.Model.extend({
  defaults: {
    username: "Unamed Human",
    bio: "",
    website: "",
    password: "",
    id: "new"
  },



    query.run({
      $username: data.username,
      $bio: data.bio,
      $website: data.website,
      $password:date.password,
      $id: id == "new" ? undefined : data.id

    }, done);
  }

  }
});



module.exports = BlogUser;
