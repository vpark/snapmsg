Snapmsg.Routers.SimpleRouter = Backbone.Router.extend({
  intialize: function($container){
    this.$container = $container;
  },
  
  routes: {
    "messages/:message_id": "showMessage"
  },
  
  showMessage: function(message_id){
    var view = this;
    var messageModel = new Snapmsg.Models.Message([],{
      id: message_id
    });
    console.log('id', message_id)
      messageModel.fetch({
        success: function(){
          console.log("message model fetched");
          var messageShow = new Snapmsg.Views.MessagesShow({
            message: messageModel
          });
        $(".container").html(messageShow.render().$el);
        }
      });

  },
  
});