// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    /**
     * var message = {
        username: 'shawndrost',
        text: 'trololo',
        roomname: '4chan',
};
     */
    var messageObj = {};
    messageObj.text = $('#message').val();
    messageObj.username = App.username;
    messageObj.roomname = Rooms.currentRoom;
    if (messageObj.text === '') {
      MessagesView.render();
    } else {
      Parse.create(messageObj);
      Messages.add(messageObj);
    }
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    //console.log('this is the event', event);

    // console.log('this is the form ', $('#message').val());
    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};