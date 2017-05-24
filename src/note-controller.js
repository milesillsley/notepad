(function(exports) {
  var controller = function() {
      this.listNotes = new listOfNotes();
      this.listView = new noteListView(this.listNotes);
  };

  controller.prototype.changeGretting = function() {
      document.getElementById("app").innerHTML = "Hi Folks";
  };

  controller.prototype.insertHTML = function() {
      document.getElementById('app').innerHTML = this.listView.displayPage();
  };


  exports.controller =  controller;
})(this);
