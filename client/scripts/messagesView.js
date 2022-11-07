// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    this.$chats.empty();
    let messageObjects = Messages.getData();
    for (let message of messageObjects) {
      this.renderMessage(message);
    }
  },

  renderMessage: function(messageObj) {
    // TODO: Render a single message.
    // html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let message = MessageView.render(messageObj);
    let $message = $(message);
    $message.on('click', '.username', function(event) {
      MessagesView.handleClick(event);
    });
    this.$chats.prepend($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    //Username needs an event listener
    //when clicked it sends the event to this function
    //this funciton adds username to friendslist
    Friends.toggleStatus(event.target.innerText);
  }

};