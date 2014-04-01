Snapmsg.Views.MessagesSub = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
    console.log('in MessagesSub');
  },
  
  events: {
    "click button.edit": "edit",
    "submit form.message_edit": "editConfirm",
    "click button.cancel": "editCancel",
    "click button.delete": "deleteMessage",
    "click container": "clearForm"
    // "click button.copy_link": "copyLink"
  },
  
  clearForm: function() {
    // add feature so if you click outside the list, it hides all messages and whatnot. should couple this with an "are you sure" modal
  }
  
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
     $(".message_edit").remove();
    var $container = $(event.currentTarget).parent();
    var model = this.messages.get($container.attr('id'));
    var messageEditView = new Snapmsg.Views.MessagesEdit({ message: model });
    $container.append(messageEditView.render().$el);
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
    console.log(model);
    // debugger;
    model.save({
      title: $modelForm.find('#message_title').val(),
      content: $modelForm.find('#message_content').val(),
      timer: $modelForm.find('#message_timer').val()
    },{ success: function(){
      // console.log('edit',$modelForm.find('#message_timer').val())
      view.render();
        }}
      );
  },
  
  template: JST["messages/indexShow"],
  
  render: function(){
    var renderedContent = this.template({
      user: this.user,
      messages: this.messages
    });
    this.$el.html(renderedContent);
    return this;

  }
  
})