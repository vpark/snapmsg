Snapmsg.Views.MessagesShow = Backbone.View.extend({
  initialize: function(options){
    this.messages = options.messages;
    console.log('in mesagesshow');
    this.client = new ZeroClipboard([],{
      moviePath: '/assets/ZeroClipboard.swf'
    });
    this.client.on( 'load', function (event) {
      event.clipboardData.setData( "text/plain", "Copy me!" );
      console.log('loclat')
    });
  },
  
  events: {
    "click button.edit": "edit",
    "submit form.message_edit": "editConfirm",
    "click button.cancel": "editCancel",
    "click button.delete": "deleteMessage",
    "click button.copy_link": "copyLink"
    
  },
  
  copyLink: function (event) {
    // var model = this.messages.get($container.attr('id'));
    // var client = new ZeroClipboard(event.currentTarget,{
    //   moviePath: '/assets/ZeroClipboard.swf'
    // });
    // client.setText(event.currentTarget);
    client.clip(event.currentTarget);
    this.client.on( 'copy', function (event) {
      event.clipboardData.setData( "text/plain", "Copy me!" );
    });
    debugger;
    console.log("should be set");
  },
  
  
  deleteMessage: function (event) {
    var view = this;
    var $container = $(event.currentTarget).parent();
    var model = this.messages.get($container.attr('id'));
    model.destroy({
      success: function(){
        view.render();
      }
    });
  },
  
  edit: function(event){
    var $container = $(event.currentTarget).parent();
    var model = this.messages.get($container.attr('id'));
    var messageEditView = new Snapmsg.Views.MessagesEdit({ message: model });
    $container.append(messageEditView.render().$el);
    // console.log(messageEditView.render().$el );
  },
  
  editCancel: function(event){
    $(event.currentTarget).closest('div.message_edit').remove();
  },
  
  editConfirm: function(event){
    event.preventDefault();
    var view = this;
    var $modelForm = $(event.currentTarget)
    var $container = $(event.currentTarget).closest('li');
    var model = this.messages.get($container.attr('id'));
    // debugger;
    model.save({
      title: $modelForm.find('#message_title').val(),
      content: $modelForm.find('#message_content').val()
    },{ success: function(){
      view.render();
        }}
      );
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