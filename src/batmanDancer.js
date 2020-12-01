var makeBatmanDancer = function(top, left, timeBetweenSteps) {
  makeSuperHeroDancer.call(this, top, left, timeBetweenSteps);
};

makeBatmanDancer.prototype = Object.create(makeSuperHeroDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;

makeBatmanDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // We will need to modify the toggle to something else
  this.$node.toggle();
};