var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('superHeroDancer');
  var $img = ('<img src="../images/superHero.png" alt="superHeroDancerPic" style="width: 50px; height: 105px">');
  this.$node.append($img);
};

makeSuperHeroDancer.prototype = Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor = makeSuperHeroDancer;

makeSuperHeroDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // We will need to modify the toggle to something else
  var staticThis = this;
  this.$node.animate({
    'height': '+=105',
    'width': '+=50'
  }, (staticThis.timeBetweenSteps / 2), function() {
    staticThis.$node.animate({
      'height': '-=105',
      'width': '-=50'
    }, (staticThis.timeBetweenSteps / 2));
  });
};