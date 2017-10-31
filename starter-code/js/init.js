'use strict';

function init() {
  var container = document.getElementById('game-container');
  var header = document.getElementById('header');
  var main = document.getElementById('main');
  var footer = document.getElementById('footer');
  var whackGame = new Whack(container, header, main, footer);

  whackGame.init();


}



document.addEventListener("DOMContentLoaded", init);
