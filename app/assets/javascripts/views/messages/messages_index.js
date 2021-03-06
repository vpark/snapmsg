Snapmsg.Views.MessagesIndex = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
    this.subviewShow = this.renderMessagesSub();
  },
  
  events: {
    "click button.refresh": "refresh",
    "click .new-msg": "renderMessagesNew",
  },  
  
  renderMessagesNew: function(){
    event.preventDefault();
    var messagesNewView = new Snapmsg.Views.MessagesNew({
      user: this.user,
      messages: this.messages,
      indexView: this
    });
    $('.msg-new-subview').html(messagesNewView.render().$el);
  },
  
  renderMessagesSub: function(){
    var messagesSubView = new Snapmsg.Views.MessagesSub({
      user: this.user,
      messages: this.messages
    });
    return messagesSubView;
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
    this.subviewShow.setElement(this.$('.msg-show-subview')).render();
    return this;
  },
  
});