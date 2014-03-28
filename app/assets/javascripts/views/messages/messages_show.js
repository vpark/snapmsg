Snapmsg.Views.MessagesShow = Backbone.View.extend({
  initialize: function(options){
    this.messages = options.messages;
    console.log('in mesagesshow');
  },
  
  events: {
    "click li": "edit",
    
  },
  
  edit: function(event){
    console.log(this);
    // console.log(event);
  },
  
  template: JST["messages/show"],
  
  render: function(){
    var renderedContent = this.template({
      messages: this.messages
    });
    this.$el.html(renderedContent);
    return this;
  }
  
})