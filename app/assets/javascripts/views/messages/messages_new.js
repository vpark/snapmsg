Snapmsg.Views.MessagesNew = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
    console.log('messagesNewView initialized');
  },
  
  events: {
    "submit form": "submit",
    "click button#cancel": "cancel",
  },
  
  cancel: function(event){
    event.preventDefault();
    console.log('fired');
    this.$el.empty();
  },
  
  submit: function(event){
    event.preventDefault();
    var newMessage = new Snapmsg.Models.Message([],{collection: this.messages});
    newMessage.save({
      title: $("#message_title").val(),
      content: $("#message_content").val(),
      user_id: this.user.id,
    },{
      success: function(){
        console.log("saved new message");
      }
    });
  },
  
  template: JST["messages/new"],
  
  render: function(){
    var renderedContent = this.template({
    });
    this.$el.html(renderedContent);
    return this;
  }
});