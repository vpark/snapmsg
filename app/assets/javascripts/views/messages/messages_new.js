Snapmsg.Views.MessagesNew = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
    this.indexView = options.indexView;
    console.log('messagesNewView initialized');
  },
  
  events: {
    "click .msg-new-submit": "newSubmit",
    "click .msg-new-cancel": "newCancel",
  },
  
  newCancel: function(event){
    event.preventDefault();
    this.$el.empty();
  },
  
  newSubmit: function(event){
    event.preventDefault();
    var view = this;
    var newMessage = new Snapmsg.Models.Message([],{collection: this.messages});
    var $form = $(event.currentTarget).closest('form');
    
    newMessage.save({
      title: $form.find('#msg-new-title').val(),
      content: $form.find('#msg-new-content').val(),
      timer: parseInt($form.find('#msg-new-timer').val(), 10),
      user_id: this.user.id,
    },{
      success: function(){
        console.log("saved new message");
        view.indexView.refresh();
        view.$el.empty();
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