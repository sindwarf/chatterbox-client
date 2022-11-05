// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Set(),

  //if this username is in our friendsset

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  toggleStatus(userName) {
    if (this._data.has(userName)) {
      this._data.delete(userName);
    } else {
      this._data.add(userName);
    }
  },

  checkStatus(userName) {
    return (this._data.has(userName));
  }
};