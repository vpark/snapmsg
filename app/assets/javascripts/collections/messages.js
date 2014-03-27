Snapmsg.Collections.Messages = Backbone.Collection.extend({
  model: Snapmsg.Models.Message,
  initialize: function(models, options){
    this.user = options.user
    this.url = this.user.url() + "/messages";
  }
});