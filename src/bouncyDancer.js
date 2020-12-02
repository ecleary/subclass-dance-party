var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncyDancer');
  var $img = ('<img src="../images/bouncy.png" alt="bouncyDancerPic" style="width: 36px; height: 60px">');
  this.$node.append($img);
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