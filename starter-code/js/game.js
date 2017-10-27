'use strict';

function Whack() {
  var self = this;
  //create the first screen - SPLASH
  self.createSplash = function() {

    //header
    var header = document.createElement('div');
    header.innerText = 'Whack-a-hack';


  };



}

var whack = new Whack();

window.onload = function() {
  // init();
  console.log('loaded');
};
