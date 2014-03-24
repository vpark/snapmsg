Snapmsg.Collections.Messages = Backbone.Collection.extend({
  model: Snapmsg.Models.Message,
  initialize: function(options){
    this.url = options.url() + "/messages";
  }
  // url: this.userUrl + "/messages"
});