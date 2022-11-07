// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();

    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(function() {
      console.log('inside setInterval of 5 seconds');
      Messages.update();
    }, 3000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {//data is an array of objects
      // examine the response from the server request:
      //console.log('server response', data);
      console.log('fetch data: ', data);
      Rooms.initialize(data);
      Messages.initialize(data);
      App.stopSpinner();
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

/*
campus: "rfp"
created_at: "2022-11-05T05:22:48.841Z"
github_handle: "ChadFusco"
message_id: 77465
roomname: "whatever"
text: "Y'all know who this is...."
updated_a: "2022-11-05T05:22:48.841Z"
username: "Western Reserve"
*/


  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
