Snapmsg.Views.MessagesShow = Backbone.View.extend({
  initialize: function(options){
    this.message = options.message;
    console.log('in messagesShow');
  },
  
  events: {
    "click button.edit": "edit",
    "submit form.message_edit": "editConfirm",
    "click button.cancel": "editCancel",
    "click button.delete": "deleteMessage",
    // "click button.copy_link": "copyLink"
  },
  
  template: JST["messages/show"],
  
  render: function(){
    var renderedContent = this.template({
      message: this.message
    });
    this.$el.html(renderedContent);
    return this;
  }
});