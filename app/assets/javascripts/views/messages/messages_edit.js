Snapmsg.Views.MessagesEdit = Backbone.View.extend({
  initialize: function(options){
    this.message = options.message;
  },
  
  template: JST["messages/edit"],
  
  render: function(){
    var renderedContent = this.template({ message: this.message });
    this.$el.html(renderedContent);
    return this;
  }
});