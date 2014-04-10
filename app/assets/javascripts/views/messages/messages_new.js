Snapmsg.Views.MessagesNew = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
    this.indexView = options.indexView;
  },
  
  events: {
    "click .msg-new-submit": "newSubmit",
    "click .msg-new-cancel": "newCancel",
  },
  
  newCancel: function(event){
    event.preventDefault();
    this.$el.empty(); //create modal asking are you sure
    // if they press yes, then delete, go back if no
    
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
        window.location.reload();
        // display submitted from controller
      }
    });
  },
  
  clearForm: function($form){
    $form.find('#msg-new-title').val("");
    $form.find('#msg-new-content').val("");
    $form.find('#msg-new-timer').val("");
  },
  
  template: JST["messages/new"],
  
  render: function(){
    var renderedContent = this.template({
    });
    this.$el.html(renderedContent);
    return this;
  }
});