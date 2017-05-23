(function(exports) {
   function noteListView(list) {
     this.list = list;
  }
     this.prototype.displayPage = function() {
      return "<ul>" + this.list + "</ul>";
     };

  exports.noteListView = noteListView;
})(this);
