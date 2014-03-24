window.Snapmsg = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var user = new Snapmsg.Models.User();
    user.fetch({
      success: function(){
        console.log("user fetched");
        var messages = new Snapmsg.Collections.Messages(user);
        messages.fetch({
          success: function(){
            console.log("messages fetched");            
            new Snapmsg.Routers.AppRouter(user, messages);
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