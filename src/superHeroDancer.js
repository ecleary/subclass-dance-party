var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('superHeroDancer');
};

makeSuperHeroDancer.prototype = Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor = makeSuperHeroDancer;

makeSuperHeroDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // We will need to modify the toggle to something else
  var staticThis = this;
  this.$node.css('border-width', '20px');
  this.$node.animate({
    'border-width': '+=10px'
  }, (staticThis.timeBetweenSteps / 2), function() {
    staticThis.$node.animate({
      'border-width': '-=10px'
    }, (staticThis.timeBetweenSteps / 2));
  });
};