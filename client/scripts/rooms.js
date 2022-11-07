// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  // _data: ['Every room'],
  _data: new Set(['Every room']),
  currentRoom: 'Every room',

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  initialize(initialData) {
    //console.log(initialData);
    for (let i = 0; i < initialData.length; i++) {
      //this._data.push(initialData[i].roomname);
      this._data.add(initialData[i].roomname);
    }
    RoomsView.render();
  },

  add(roomName) {
    this._data.add(roomName);
    RoomsView.render();
  },

  select(room) {
    Rooms.currentRoom = room;
    MessagesView.render();
  }
};