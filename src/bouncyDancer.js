var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncyDancer');
  // this.timeBetweenSteps = timeBetweenSteps;
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // We will need to modify the toggle to something else
  var position = this.$node.position();
  if (position.top) {
    var staticThis = this;
    this.$node.animate({
      top: '-=25'
    }, (staticThis.timeBetweenSteps / 2), function() {
      staticThis.$node.animate({
        top: '+=25',
      }, (staticThis.timeBetweenSteps / 2));
    });
  }
};