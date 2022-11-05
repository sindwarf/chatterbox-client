// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  add(messageObj) {
    _data.push(messageObj);
  },

  getData() {

  }

};

/*
{message_id: 77347, roomname: 'auditions', text: 'hey there!', username: 'uncle-jay', github_handle: 'jyuen', …}
*/