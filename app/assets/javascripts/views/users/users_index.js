Snapmsg.Views.UsersIndex = Backbone.View.extend({
  initialize: function(){
    
  },
  
  template: JST["users/index"],
  
  render: function(){
    this.$el.html(this.template({
    }));
    return this;
  }
});