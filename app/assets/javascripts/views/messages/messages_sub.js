Snapmsg.Views.MessagesSub = Backbone.View.extend({
  initialize: function(options){
    this.user = options.user;
    this.messages = options.messages;
    this.prevShow = undefined;
    console.log('in MessagesSub');
  },  
  
  template: JST["messages/indexShow"],

  templateFull: JST["messages/indexShowFull"],
  
  
  events: {
    "click .msg-li-btn-edit": "edit",
    "click .msg-edit-cancel": "editCancel",
    "click .msg-edit-submit": "editSubmit",
    "click .msg-li-btn-delete": "deleteMessage",
    "click .msg-li": "showFull",
    // "click .msg-ul": "test"
    "click .msg-li-btn-link": "copyLink"
  },
  
  showFull: function (event) {
    event.stopPropagation();
    // this.clearForm();
    console.log('showfull clicked');
    // debugger;
    var $li = $(event.currentTarget).closest('li');
    
    if ($li.find('.msg-li-body').length > 0) {
      this.clearForm($li);
      console.log($li.find('.msg-li-body'));
    } else {
      var model = this.messages.get($li.attr('id'));
      var showFullContent = this.templateFull({
        message: model
      });
      $li.append(showFullContent);
      $('.msg-li-body').fadeIn(function(){
        $('.msg-li-timer').fadeIn().show(400);
      });
    }
  },
  
  clearForm: function($li) {
    $li.find('.msg-li-body').fadeOut(function(){
      this.remove();
    });
  },
  
  deleteMessage: function (event) {
    event.stopPropagation();
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
    event.stopPropagation();
    // $(".msg-li-content").remove();
    var $li = $(event.currentTarget).closest('li');
    $li.hide();
    var model = this.messages.get($li.attr('id'));
    // debugger;
    var messageEditView = new Snapmsg.Views.MessagesEdit({ message: model });
    $li.after(messageEditView.render().$el);
    
    $('.msg-edit-form').fadeIn().show();
  },
  
  editCancel: function(event){
    event.stopPropagation();
    var $form = $(event.currentTarget).closest('form');
    var $li = $form.parent().prev();
    $form.fadeOut(function(){
      this.remove();
      $li.show();
    });

    // $('.msg-li-body').remove();
  },
  
  editSubmit: function(event){
    event.preventDefault();
    var view = this;
    var $form = $(event.currentTarget).closest('form');
    var model = this.messages.get($form.attr('id'));
    console.log("whats going on");
    model.save({
      title: $form.find('#msg-edit-title').val(),
      content: $form.find('#msg-edit-content').val(),
      timer: parseInt($form.find('#msg-edit-timer').val(), 10)
    },{
      success: function(){
        // console.log('edit',$modelForm.find('#message_timer').val())
        view.render();
      }
    });
  },

  render: function(){
    var renderedContent = this.template({
      user: this.user,
      messages: this.messages
    });
    this.$el.html(renderedContent);
    return this;
  }
});