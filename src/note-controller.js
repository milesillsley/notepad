(function(exports) {
  var controller = function() {
      this.greeting = document.getElementById('app');
  };

  controller.prototype.changeGretting = function() {
      document.getElementById("app").innerHTML = "Hi Folks";
  };

  exports.controller =  controller;
})(this);
