(function(exports) {
  function testListOfNotes() {
    var list = new listOfNotes();

    if (list.listItems.length !== 1) {
      throw new Error("Please enter a note");
    }
  }
})(this);
