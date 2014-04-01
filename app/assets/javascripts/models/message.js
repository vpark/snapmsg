Snapmsg.Models.Message = Backbone.Model.extend({
  initialize: function(models, options){
    // this.id = options.id;
    // console.log("model", this.id);
    // this.url = options.user.url() + "/messages";
    // this.url = "api/messages/" + options.id
    if (options.id) {
      this.url = "api/messages/" + options.id
    }
  },
  
  // url: "api/messages" + "/" + this.id
});