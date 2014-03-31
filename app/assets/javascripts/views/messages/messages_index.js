Snapmsg.Views.MessagesIndex = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
    this.subviewShow = this.renderMessagesShow();
  },
  
  events: {
    "click button.refresh": "refresh",
    "click a": "renderMessagesNew",
  },  
  
  renderMessagesNew: function(){
    event.preventDefault();
    var messagesNewView = new Snapmsg.Views.MessagesNew({
      user: this.user,
      messages: this.messages
    });
    $('div#new_message').html(messagesNewView.render().$el);
  },
  
  renderMessagesShow: function(){
    var messagesShowView = new Snapmsg.Views.MessagesShow({
      user: this.user,
      messages: this.messages
    });
    return messagesShowView;
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
    this.subviewShow.setElement(this.$('div#show_messages')).render();
    return this;
  },
  
});