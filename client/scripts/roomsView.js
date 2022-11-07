// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //App.fetch returns an Array[100] where each element is an object containing 'roomname' property
    //let initialData = App.fetch();
    // for (let i = 0; i < initialData.length; i++) {
    //   Rooms.add(initialData[i].roomname);
    // }

    this.renderRoom(Rooms.currentRoom);
    this.$button.on('click', function(event) {
      console.log('inside the room button');
      RoomsView.handleClick(event);
    });
    this.$select.change(function(event) {
      RoomsView.handleChange(event);
    });
  },

  render: function() {
    // TODO: Render out the list of rooms.
    this.$select.empty();
    const setIterator = Rooms._data.values();
    for (const value of setIterator) {
      this.renderRoom(value);
    }
    // for (let i = 0; i < Rooms._data.length; i++) {
    //   this.renderRoom(Rooms._data[i]);
    // }
  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    //i : string defining room name
    // $room = $('#' + roomName);
    // this.$select.append(new Option(roomName, $room));
    this.$select.append($('<option>', {
      value: roomName,
      text: roomName
    }));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.select(event.target.value);
    console.log(Messages.getData());
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // console.log('the event is', event);
    // console.log('the event target is', event.target);

    Rooms.add(prompt('Add a room name'));
  }
};
