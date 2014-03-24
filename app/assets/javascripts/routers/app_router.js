Snapmsg.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(user, messages){
    this.user = user;
    this.messages = messages;
    console.log("router initialized")
  },
  
  routes: {
    "": "index",
    "users/": "showUsersIndex",
    "users/:user_id/messages": "showMessegesIndex",
    "users/:user_id/messages/:messages_id": "showMessage",
  },
  
  index: {
  
  },
  
  showUsersIndex: function(){
    var usersIndexView = new Snapmsg.Views.UsersIndex({
      user: this.user
    });
    debugger;
  }
});