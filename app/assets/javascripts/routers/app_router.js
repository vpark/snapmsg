Snapmsg.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(user, messages, $container){
    this.user = user;
    this.messages = messages;
    this.$container = $container;
    this.zeroClipboard();
    console.log("router initialized")
  },
  
  routes: {
    "": "index",
    "users": "showUsersIndex",
    "users/:user_id/messages": "showMessegesIndex",
    "users/:user_id/messages/new": "showMessegesNew",
    "messages/:message_id": "showMessage",
    // "users/:user_id/messages/:messages_id": "showMessage",
  },
  
  index: {
    
  },
  
  showMessage: function(message_id){
    var view = this;
    var messageModel = new Snapmsg.Models.Message([],{
      id: message_id
    });
    console.log('id', message_id)
    messageModel.fetch({
      success: function(){
        console.log("message model fetched");
        var messageShow = new Snapmsg.Views.MessagesShow({
          message: messageModel
        });
        view.$container.html(messageShow.render().$el);
      }
    });

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
    this.copyLink();
  },
  
  showMessegesNew: function(){
    var messagesNewView = new Snapmsg.Views.MessagesNew({
      user: this.user,
      messages: this.messages
    });
    this.$container.html(messagesNewView.render().$el);
  },
  
  zeroClipboard: function(){
    ZeroClipboard.config({
      moviePath: "http://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.3.2/ZeroClipboard.swf"
    });
  },
  
  copyLink: function () {
    var zeroclipboard = new ZeroClipboard($('i[data-clipboard-text]'));
    
    zeroclipboard.on('complete', function(client, args) {
      console.log('complete');
      $(this).tooltip('show');
      $link = $(this);
      setTimeout(function(){
        $link.tooltip('hide');
      }, 1000);
    });
  }
  
});