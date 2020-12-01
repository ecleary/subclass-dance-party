var makeBatmanDancer = function(top, left, timeBetweenSteps) {
  makeSuperHeroDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('batmanDancer');
};

makeBatmanDancer.prototype = Object.create(makeSuperHeroDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;

makeBatmanDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // We will need to modify the toggle to something else
  // this.$node.toggle();
  var staticThis = this;
  this.$node.css('border-color', 'green');
  this.$node.animate({
    'border-color': 'black'
  }, (staticThis.timeBetweenSteps / 2), function() {
    staticThis.$node.animate({
      'border-color': 'green'
    }, (staticThis.timeBetweenSteps / 2));
  });
};