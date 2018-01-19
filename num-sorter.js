var numbers  = [];

module.exports = {
  insert: function (num) {
    numbers.push(num);
  },
  show: function() {
    numbers.sort(function(a, b) {
      return a - b;
    });
    return numbers;
  }
};