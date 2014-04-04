Snapmsg.Views.MessagesSub = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
    console.log('in MessagesSub');
  },
  
  events: {
    "click .msg-li-btn-edit": "edit",
    "submit form.message_edit": "editConfirm",
    "click .cancel": "editCancel",
    "click .msg-li-btn-delete": "deleteMessage",
    "click .msg-li-title": "showFull"
    // "click .msg-ul": "clearForm"
  },
  
  showFull: function (event) {
    var $li = $(event.currentTarget).closest('li');
    var model = this.messages.get($li.attr('id'));
    var $content = $("<div class='panel-body msg-li-content'>" +
                       "Content: " + model.escape("content") +
                       "<br>" +
                       "Timer: " + model.escape("timer") +
                     "</div>");

    $li.append($content);
    // show timer and the content upon clicking
  },
  
  clearForm: function() {
    // add feature so if you click outside the list, it hides all messages and whatnot. should couple this with an "are you sure" modal
  },
  
  deleteMessage: function (event) {
    var view = this;
    var $li = $(event.currentTarget).closest('li');
    var model = this.messages.get($li.attr('id'));
    model.destroy({
      success: function(){
        view.render();
      }
    });
  },
  
  edit: function(event){
     $(".msg-li-content").remove();
     var $li = $(event.currentTarget).closest('li');
     var model = this.messages.get($li.attr('id'));
    // debugger;
    var model = this.messages.get($tr.attr('id'));
    var messageEditView = new Snapmsg.Views.MessagesEdit({ message: model });
    $tr.html(messageEditView.render().$el);
  },
  
  editCancel: function(event){
    $(event.currentTarget).closest('div.message_edit').remove();
    //has to swap out the view
  },
  
  editConfirm: function(event){
    event.preventDefault();
    var view = this;
    var $modelForm = $(event.currentTarget);
    var model = this.messages.get($modelForm.attr('id'));
    // debugger;
    model.save({
      title: $modelForm.find('#message_title').val(),
      content: $modelForm.find('#message_content').val(),
      timer: parseInt($modelForm.find('#message_timer').val(), 10)
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