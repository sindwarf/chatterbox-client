// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$button.on('click', function(event) {
      console.log('inside the room button');
      RoomsView.handleClick(event);
    });
  },

  render: function() {
    // TODO: Render out the list of rooms.

  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    //i : string defining room name
    $room = $('#' + roomName );
    this.$select.append(new Option(roomName, $room));

    //$("#selectList").append(new Option("option text", "value"));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // console.log('the event is', event);
    // console.log('the event target is', event.target);
    Rooms.add('lobby');
  }
};
