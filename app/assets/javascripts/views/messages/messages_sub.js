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
    this.clearForm();
    var $li = $(event.currentTarget).closest('li');
    var model = this.messages.get($li.attr('id'));
    
    var showFullContent = this.templateFull({
      message: model
    });
    
    if (this.prevShow != model) {
      $li.append(showFullContent);
      $('.msg-li-body').show('slow', function(){
        $('.msg-li-timer').show();
      });
      this.prevShow = model;
    }
    // show timer and the content upon clicking
  },
  
  test: function(event){
    console.log("bleh", $(event.currentTarget), $('.msg-ul')[0] );
    if ( $(event.currentTarget)[0] == $('.msg-ul')[0] ) {
      this.clearForm();
    }
  },
  
  clearForm: function() {
    $('.msg-li-body').slideUp('slow', function(){
      this.remove();
    });
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
    // $(".msg-li-content").remove();
    var $li = $(event.currentTarget).closest('li');
    $li.hide();
    var model = this.messages.get($li.attr('id'));
    // debugger;
    var messageEditView = new Snapmsg.Views.MessagesEdit({ message: model });
    $li.after(messageEditView.render().$el);
  },
  
  editCancel: function(event){
    var $form = $(event.currentTarget).closest('form');
    var $li = $form.parent().prev();
    $form.remove();
    $li.show();
    this.clearForm();
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