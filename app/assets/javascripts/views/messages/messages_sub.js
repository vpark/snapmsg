Snapmsg.Views.MessagesSub = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
    console.log('in MessagesSub');
  },
  
  events: {
    "click .edit": "edit",
    "submit .message_edit": "editConfirm",
    "click .cancel": "editCancel",
    "click .delete": "deleteMessage",
    "click container": "clearForm"
    // "click button.copy_link": "copyLink"
  },
  
  clearForm: function() {
    // add feature so if you click outside the list, it hides all messages and whatnot. should couple this with an "are you sure" modal
  },
  
  deleteMessage: function (event) {
    var view = this;
    var $tr = $(event.currentTarget).parent();
    var model = this.messages.get($tr.attr('id'));
    model.destroy({
      success: function(){
        view.render();
      }
    });
  },
  
  edit: function(event){
     $(".message_edit").remove();
    var $tr = $(event.currentTarget).parent();
    var model = this.messages.get($tr.attr('id'));
    var messageEditView = new Snapmsg.Views.MessagesEdit({ message: model });
    $tr.after(messageEditView.render().$el);
  },
  
  editCancel: function(event){
    $(event.currentTarget).closest('.message_edit').remove();
  },
  
  editConfirm: function(event){
    event.preventDefault();
    var view = this;
    var $modelForm = $(event.currentTarget)
    var model = this.messages.get($modelForm.attr('id'));
    debugger;
    model.save({
      title: $modelForm.find('#message_title').val(),
      content: $modelForm.find('#message_content').val(),
      timer: parseInt($modelForm.find('#message_timer').val(), 10)
    },{ success: function(){
      console.log('edit',$modelForm.find('#message_timer').val())
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