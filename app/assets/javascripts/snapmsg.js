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
        console.log("user fetched");
        console.log(user);
        var messages = new Snapmsg.Collections.Messages(user);
        messages.fetch({
          success: function(){
            console.log("messages fetched");            
            new Snapmsg.Routers.AppRouter(user, messages, $container);
            Backbone.history.start();
          }
        });
      }
    }); 
  }
};
  
$(document).ready(function(){
  Snapmsg.initialize();
});