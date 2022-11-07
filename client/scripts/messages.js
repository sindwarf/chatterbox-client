// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  initialize(initialData) {
    for (let i = initialData.length - 1; i >= 0; i--) {
      if (initialData[i].roomname !== null && initialData[i].username !== null && initialData[i].text) {
        let msgObj = {
          messageId: initialData[i].message_id,
          username: initialData[i].username,
          text: initialData[i].text.replace(/</g, '').replace(/>/g, ''),
          roomname: initialData[i].roomname
        };
        this._data.push(msgObj);
      }
    }
    //last element ID in our data array
    //console.log(this._data[this._data.length - 1].messageId);
    MessagesView.render();
  },

  add(messageObj) {
    let msgObj = {
      messageId: messageObj.message_id,
      username: messageObj.username,
      text: messageObj.text.replace(/</g, '').replace(/>/g, ''),
      roomname: messageObj.roomname
    };
    if (msgObj.messageId !== undefined) {
      this._data.push(msgObj);
      MessagesView.render();
    }

  },

  update() {
    //check the beginning of their data
    //compare with end of our data for message ID
      //iterate through new data
      //save all messages to an array
      //stop when we hit message ID of our highest message ID
    //reverse array and concat to data

    Parse.readAll(function(data) {
      var newData = [];
      var lastestID = Messages._data[Messages._data.length - 1].messageId;
      console.log('got our data back on update');
      for (let i = 0; i < data.length; i++) {
        console.log('this is before the if statement', data[i].message_id);
        if (data[i].message_id <= lastestID) {
          break;
        }
        newData.push(data[i]);

      }
      console.log('newData in parse', newData);
      for (let i = 0; i < newData.length; i++) {
        Messages.add(newData[i]);
      }
    });
  },

  getData() {
    if (Rooms.currentRoom === 'Every room') {
      return this._data;
    } else {
      const currentRoomMessages = this._data.filter(msg => msg.roomname === Rooms.currentRoom);
      return currentRoomMessages;
    }
  }

};

/*
{message_id: 77347, roomname: 'auditions', text: 'hey there!', username: 'uncle-jay', github_handle: 'jyuen', …}
*/