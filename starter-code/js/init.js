'use strict';

function init() {
  var container = document.getElementById('game-container');
  var whackGame = new Whack(container);
  var header = document.getElementById('header');
  var main = document.getElementById('main');
  var footer = document.getElementById('footer');
  whackGame.init();
  click();
}


function click() {
  console.log('click');
};



document.addEventListener("DOMContentLoaded", init);
