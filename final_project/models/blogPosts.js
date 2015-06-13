var Backbone = require("backbone");
var db = require("../database");
var moment = require('moment');



var  SAVE_NEW = "INSERT INTO blogposts (date, topic, comment, timestamp) VALUES ($date,$topic, $comment, $timestamp);";



  var BlogPost = Backbone.Model.extend({

  defaults: {
    date: "",
    topic: "",
    comment: "",
    id: "new"
  },



    save: function(done) {
    var self = this;
    var id = this.get("id");
    var q = id == "new" ? SAVE_NEW : UPDATE;
      // pass in its data
      //
      // console.log(db)
    var query = db.connection.prepare(q);

    var data = this.toJSON();

    query.run({


      $topic: data.topic,
      $comment: data.comment,
      $date: moment().format("MMMM Do YY"),
      $timestamp: moment().format("x"),
      // $date: Date.now(),
      $id: id == "new" ? undefined : data.id

    }, done);
  }
});



module.exports = BlogPost;
