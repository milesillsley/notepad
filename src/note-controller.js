(function(exports) {
  var controller = function() {
      this.greeting = document.getElementById('app');
  };

  controller.prototype.changeGretting = function() {
      document.getElementById("demo").innerHTML = 5 + 6;
  };


  exports.controller =  controller;
})(this);
