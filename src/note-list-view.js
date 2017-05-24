(function(exports) {
  var noteListView = function(list) {
    this.list = list;
  };
  noteListView.prototype.displayPage = function() {
    var display = "<ul>";
    this.list.listItems.forEach(function(note) {
      display += ("<li><div>" + note.text + "</div></li>");
    });
    return (display + "</ul>");
  };
  exports.noteListView = noteListView;
})(this);
