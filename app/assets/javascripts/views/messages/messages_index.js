Snapmsg.Views.MessagesIndex = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
  },
  
  events: {
    "click button.refresh": "refresh",
    "click a": "renderNewMessage",
    "click button#cancel": "cancelNewMessage",
  },
  
  cancelNewMessage: function(){
        this.$('div#new_message').empty();
  },
  
  renderNewMessage: function(){
    event.preventDefault();
    var messagesNewView = new Snapmsg.Views.MessagesNew({
      user: this.user,
      messages: this.messages
    });
    this.$('div#new_message').html(messagesNewView.render().el);
  },
  
  refresh: function(){
    var view = this;
    this.messages.fetch({
      success: function(){
        view.render();
      }
    });
  },
  
  template: JST["messages/index"],
  
  render: function(){
    var renderedContent = this.template({
      user: this.user,
      messages: this.messages
    });
    this.$el.html(renderedContent);
    return this;
  }
});