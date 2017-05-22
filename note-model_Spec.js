(function(exports) {
  function testNoteHasText() {
    var note = new Note();

    if (note.text !== "My favourite language is javascript!") {
      throw new Error("incorrect text shown");
    }
  }
  testNoteHasText();
})(this) ;
