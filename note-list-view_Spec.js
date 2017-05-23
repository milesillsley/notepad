(function() {
  var list = new listOfNotes();
  var note = new Note("<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>");
  list.writeNote();
  assert.isEqual(noteListView(list).displayPage(), "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>");
})();
