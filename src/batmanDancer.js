var makeBatmanDancer = function(top, left, timeBetweenSteps) {
  makeSuperHeroDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('batmanDancer');
  this.$node.removeClass('superHeroDancer');
};

makeBatmanDancer.prototype = Object.create(makeSuperHeroDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;

makeBatmanDancer.prototype.step = function() {
  makeSuperHeroDancer.prototype.step.call(this);
  // We will need to modify the toggle to something else
  // this.$node.toggle();
  var staticThis = this;
  var position = this.$node.position();
  if (position.top && position.left) {
    this.$node.animate({
      top: '+=25'
    }, (staticThis.timeBetweenSteps / 4), function() {
      staticThis.$node.animate({
        left: '+=25'
      }, (staticThis.timeBetweenSteps / 4), function() {
        staticThis.$node.animate({
          top: '-=25'
        }, (staticThis.timeBetweenSteps / 4), function() {
          staticThis.$node.animate({
            left: '-=25'
          }, (staticThis.timeBetweenSteps / 4)
          );
        });
      });
    });
  }
};