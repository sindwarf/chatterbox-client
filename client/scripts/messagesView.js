// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
  },

  renderMessage: function(messageObj) {
    // TODO: Render a single message.
    //i : messageObj
    //o : need to add to #chats
    let message = MessageView.render(messageObj);
    // console.log('message: ' + message);
    // let $message = $(message);
    // console.log('this is the username: ' + $message.find('username'));
    // this.handleClick($message.find('username').onclick);
    this.$chats.append(message);

    //console.log($('#chats').length);
  },

  /*
  var message = {
        username: 'Mel Brooks',
        text: 'Never underestimate the power of the Schwartz!',
        roomname: 'lobby'
      };
  */

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    //Username needs an event listener
    //when clicked it sends the event to this function
    //this funciton adds username to friendslist


    console.log('this is the event: ' + event);
    //let text = event.target.text();
    //console.log(text);

  }

};