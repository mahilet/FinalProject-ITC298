module.exports = [
  {
    method:"GET",
    path: "/",
    handler: require("./handlers/home")
    
  },
  //  this is a list of   users biographies
{
    method: "GET",
    path:"/bios",
    handler:require("./handlers/bios")
    
},


{
    method:"GET",
    path: "/bios/bio/{index}",
    handler:require("./handlers/bios")
},

{
    method: "GET",
    path:"/createpost",

    handler:require("./handlers/getcreatepost")
  },



  {
    method: "POST",
    path:"/createpost",
    handler: require("./handlers/createpost")
},



  {
    method:"GET",
    path: "/login",
     handler:require("./handlers/getlogin")
   
  },

  {
    method:"POST",
    path:"/login",
    handler:require("./handlers/login")
  },



{
    method:"GET",
    path:"/build/{param*}",
    handler:{
    directory:{
    path:"build/"

    }
  }


},

{
    method:"GET",
    path:"/assets/{param*}",
    handler:{
    directory:{
    path:"src/"

    }
  }

}];
