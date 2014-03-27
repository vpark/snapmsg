Snapmsg.Views.MessagesNew = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
    console.log('messagesNewView initialized');
  },
  
  events: {
    "submit form": "submit"
  },
  
  submit: function(event){
    event.preventDefault();
    var newMessage = new Snapmsg.Models.Message([],{collection: this.messages});
    console.log(this.user);
    // newMessage.set({url: this.user.url() + "/messages"});
    // debugger;
    newMessage.save({
      title: $("#message_title").val(),
      content: $("#message_content").val(),
      user_id: this.user.id,
    },{
      success: function(){
        console.log("saved new message");
      }
    }
  );
},
  
template: JST["messages/new"],
  
render: function(){
  var renderedContent = this.template({
    // user: this.user
  });
  this.$el.html(renderedContent);
  return this;
}
});