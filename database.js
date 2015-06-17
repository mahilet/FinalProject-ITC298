var async = require("async");
var sqlite = require("sqlite3");
var db; // used across this module



var usersDb = {
  connection: null,
  init: function(ready) {
    var db = usersDb.connection = new sqlite.Database("database.db", function(err) {

      if (err) {
        console.error("Database not opened");
        process.exit(1);
      }
        //  db.run("ALTER TABLE use ADD COLUMN timestamp");


      //create tables, and execute ready callback when done
      async.parallel([
        function(next) {
          console.log("creating user database", db);
          db.run("CREATE TABLE IF NOT EXISTS users (username, bio, website, password);", function(err) {
            console.log(err, "users TABLE is created");            
            db.run("DELETE FROM users ");

          },next);
        },
        function(next) {
          console.log("STARTING to create table 'blogposts");
          // db.run("INSERT INTO users VALUES ('1', 'assets/images/bilbo.jpg', 'hapi.com', '1');");
          // db.run("INSERT INTO users VALUES ('customer', 'assets/images/frog.jpg', 'hapi.com', 'abc');");

       
          db.run("CREATE TABLE IF NOT EXISTS blogposts (date, comment, topic );", function (err) {
            console.log(err, "blogposts is created");
            db.run("DELETE FROM blogposts");

          }, next);
        }
      ], function(err, result) {
          db.all("SELECT * FROM users");
        console.log(err);
        console.log("done setting up db")
        if (ready) ready(err);
      });
    });
  },


  getAllblogUsers: function(c) {
    this.connection.all("SELECT username, bio, website, rowid, password FROM users;", c);
  },
  getAllblogPosts: function(c) {

    this.connection.all("SELECT * FROM blogposts ORDER BY timestamp DESC;", c);
  },
  saveNewPost: function(namePost) {
    this.connection.run("INSERT INTO blogposts (date, comment, topic,timestamp) VALUES ($date, $comment, $topic, $timestamp);", {
      $topic: namePost.topic,
      $comment: namePost.comment,
      $date: Date.now(),
      $timestamp:namePost.timestamp
    });
  },
  checkPasword: function(username, callback) {
    this.connection.get("SELECT * FROM users WHERE username = $username", {
      $username : username
    }, callback);
  }
};

module.exports = usersDb;
