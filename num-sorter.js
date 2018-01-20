var numbers  = [];

var sorted = function() {
    numbers.sort(function(a, b) {
      return a - b;
  }); return numbers;
}

module.exports = {
  insert: function (num) {
    numbers.push(num);
  },
  show: function() {
    console.log(sorted());
  }
};