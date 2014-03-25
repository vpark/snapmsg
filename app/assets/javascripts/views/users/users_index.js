Snapmsg.Views.UsersIndex = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
  },
  
  template: JST["users/index"],
  
  render: function(){
    var renderedContent = this.template({
      user: this.user
    });
    this.$el.html(renderedContent);
    return this;
  }
});