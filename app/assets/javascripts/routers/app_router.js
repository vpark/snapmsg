Snapmsg.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(user, messages, $container){
    this.user = user;
    this.messages = messages;
    this.$container = $container;
    console.log("router initialized")
  },
  
  routes: {
    "": "index",
    "users": "showUsersIndex",
    "users/:user_id/messages": "showMessegesIndex",
    "users/:user_id/messages/new": "showMessegesNew",
    "users/:user_id/messages/:messages_id": "showMessage",
  },
  
  index: {
    
  },
  
  showUsersIndex: function(){
    var usersIndexView = new Snapmsg.Views.UsersIndex({
      user: this.user
    });
    console.log("Running Users Index View");
    this.$container.html(usersIndexView.render().$el);
  },
  
  showMessegesIndex: function(){
    var messagesIndexView = new Snapmsg.Views.MessagesIndex({
      user: this.user,
      messages: this.messages
    });
    console.log("Running Messages Index View");
    this.$container.html(messagesIndexView.render().$el);
  },
  
  showMessegesNew: function(){
    var messagesNewView = new Snapmsg.Views.MessagesNew({
      user: this.user,
      messages: this.messages
    });
    this.$container.html(messagesNewView.render().$el);
  }
});