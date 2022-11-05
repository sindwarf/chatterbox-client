// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    //i : string defining room name
    $room = $('#' + roomname );
    this.$select.append(new Option(roomname, $room));

    //$("#selectList").append(new Option("option text", "value"));

    /**
     $.each(items, function (i, item) {
    $('#mySelect').append($('<option>', {
        value: item.value,
        text : item.text
    }));
});
     */
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
