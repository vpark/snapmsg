Snapmsg.Views.MessagesIndex = Backbone.View.extend({
  initialize: function(options){
    this.messages = options.messages;
  },
  
  events: {
    "click button.refresh": "refresh"
  },
  
  refresh:function(){
    var view = this;
    console.log("I'm refreshed");
    // debugger;
    this.messages.fetch({
      success: function(){
        view.render;
        console.log('refetched messages');
      }
    });
  },
  
  template: JST["messages/index"],
  
  render: function(){
    var renderedContent = this.template({
      messages: this.messages
    });
    this.$el.html(renderedContent);
    return this;
  }
});