window.Snapmsg = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var user = new Snapmsg.Models.User();
    var messages; 
    user.fetch({
      success: function(){
        messages = new Snapmsg.Collections.Messages(user);
        messages.fetch();
      },
      error: function(){
        console.error("Failed to fetch user.");
      }  
    });
    
  }
};
  
$(document).ready(function(){
  Snapmsg.initialize();
});