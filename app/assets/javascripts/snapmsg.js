window.Snapmsg = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var user = new Snapmsg.Models.User();
    var $container = $('.container');
    user.fetch({
      success: function(){
        
        if (user.id == undefined) {
          console.log('User is not logged in');
          new Snapmsg.Routers.SimpleRouter($container);
          Backbone.history.start();
        } else {
          console.log("user fetched", user);
          var messages = new Snapmsg.Collections.Messages([], {user: user});
          messages.fetch({
            success: function(){
              console.log("messages fetched");
              new Snapmsg.Routers.AppRouter(user, messages, $container);
              Backbone.history.start();
            }
          });
        } 
      }
    }); 
  }
};
  
$(document).ready(function(){
  Snapmsg.initialize();
});