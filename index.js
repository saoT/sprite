//--------------------- CREATE ANIMATION ---------------------//

var sprite = document.getElementById('sprite');
var spriteStepWidth = 92;
var spriteSteps = 2;
var step = 0;

function initSprite () {
  if (step == spriteSteps) {
    step = 0;
  }
  else {
    step++;
  }
  sprite.style.left= '-' + step * spriteStepWidth + 'px';
}

//-----------------------------------------------------------
// WITHOUT BUTTONS
//-----------------------------------------------------------

var spriteAnimation = window.setInterval(initSprite, 800);

//-----------------------------------------------------------
// WITH BUTTONS
//-----------------------------------------------------------

//--------------------- START ANIMATION ---------------------//

// var startAnimation = document.getElementById('start');
// var spriteAnimation;

// startAnimation.onclick = function () {
//   window.clearInterval(spriteAnimation);
//   spriteAnimation = window.setInterval(initSprite, 80);
// }



//--------------------- STOP ANIMATION ---------------------//

// var stopAnimation = document.getElementById('stop');

// stopAnimation.onclick = function () {
//   window.clearInterval(spriteAnimation);
// }