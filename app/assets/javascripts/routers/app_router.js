Snapmsg.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(){
    
  },
  
  routes: {
    "": "index",
    "users/": "showUsersIndex",
    "users/:user_id/messages": "showMessegesIndex",
    "users/:user_id/messages/:messages_id": "showMessage",
  },
  
  index: {
  
  },
  
  showUsersIndex: function(user_id){
    
  }
});