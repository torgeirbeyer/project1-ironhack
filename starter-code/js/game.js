'use strict';

var header = document.getElementById('header');
var main = document.getElementById('main');
var footer = document.getElementById('footer');

function Whack(container) {
  var self = this;
  self.container = container;
  self.header = header;
  self.main = main;
  self.footer = footer;
  //variables to be updated
  self.timer = 0;
  self.player1Score = 0;
  self.player2Score = 0;
  self.gameTimer = 0;
  self.hackersArray = [{
    name: 'Torgeir',
    image: ""
  }];

  // CREATING THE SCREENS
  //create the first screen - SPLASH
  self.createSplash = function() {
    //HEADER
    // var header = document.createElement('header');
    // header.classList.add('header');
    // header.setAttribute('id', 'header');
    // self.container.appendChild(header);
    //HEADER TEXT
    var h1 = document.createElement('h1');
    h1.innerText = 'whack-a-hack';
    self.header.appendChild(h1);

    //MAIN
    // var main = document.createElement('main');
    // self.container.appendChild(main);
    // main.classList.add('main');
    //PLAY BUTTON
    var div = document.createElement('div');
    div.classList.add('main-container');
    self.main.appendChild(div);
    var playButton = document.createElement('button');
    playButton.classList.add('big-button');
    // playButton.type = 'button';
    playButton.innerHTML = 'play';
    div.appendChild(playButton);
    //CHOOSE HOW MANY PLAYERS
    var divPlayer = document.createElement('div');
    divPlayer.classList.add('player-choice');
    main.appendChild(divPlayer);
    var playerLabel1 = document.createElement('label');
    playerLabel1.innerText = 'one player';
    playerLabel1.classList.add('player1');
    divPlayer.appendChild(playerLabel1);
    // var player1 = document.createElement('input');
    // player1.type = 'checkbox';
    // player1.innerText = '2 Players';
    // divPlayer.appendChild(player1);
    // var playerLabel2 = document.createElement('label');
    // playerLabel2.innerText = 'two players';
    // playerLabel2.classList.add('player2');
    // divPlayer.appendChild(playerLabel2);
    // var player2 = document.createElement('input');
    // player2.type = 'checkbox';
    // player2.innerText = '2 Players';
    // divPlayer.appendChild(player2);

    //FOOTER
    // var footer = document.createElement('footer');
    // footer.classList.add('footer');
    // self.container.appendChild(footer);
    //FOOTER TEXT
    var footerText = document.createElement('p');
    footerText.innerText = 'Whack what?';
    self.footer.appendChild(footerText);
    //FOOTER BUTTONS
    // var badPeople = document.createElement('input');
    // badPeople.type = 'radio';
    // badPeople.innerText = 'Bad people';
    // footer.appendChild(badPeople);
    var hackers = document.createElement('input');
    hackers.type = 'radio';
    hackers.innerText = 'Hackers';
    footer.appendChild(hackers);

    // USER INTERACTION
    playButton.addEventListener('click', self.createGameScreen);
  };

  // CREATING THE GAMESCREEN
  self.createGameScreen = function() {
    self.destroyScreens();
    //GAMESCREEN HEADER
    var timer = document.createElement('div');
    timer.classList.add('timer');
    self.header.appendChild(timer);
    var timerSpan = document.createElement('span');
    timerSpan.setAttribute('id', 'countdown');
    timerSpan.innerHTML = '00';
    timer.appendChild(timerSpan);

    var score = document.createElement('div');
    score.classList.add('score');
    self.header.appendChild(score);
    var scoreSpan = document.createElement('span');
    scoreSpan.setAttribute('id', 'updateScore');
    scoreSpan.innerHTML = '0';
    score.appendChild(scoreSpan);

    // GAMESCREEN MAIN
    var grid = document.createElement('div');
    grid.classList.add('grid');
    self.main.appendChild(grid);
    for (var ix = 1; ix < 10; ix++) {
      var cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('id', 'num' + (ix));
      grid.appendChild(cell);
    }

    // GAMESCREEN FOOTER
    var messageDiv = document.createElement('div');
    messageDiv.setAttribute('id', 'displayMessage');
    footer.appendChild(messageDiv);
    var message = document.createElement('span');
    message.classList.add('footer-text');
    message.innerHTML = 'SHOW MESSAGE HERE';
    messageDiv.appendChild(message);
  };

  // CREATING THE END SCREEN
  self.createEndScreen = function() {
    self.destroyScreens();

  };


  // DESTROYING THE SCREENS
  // DESTROY SCREEN
  self.destroyScreens = function() {
    while (self.header.firstChild) {
      self.header.removeChild(self.header.firstChild);
    }
    while (self.main.firstChild) {
      self.main.removeChild(self.main.firstChild);
    }
    while (self.footer.firstChild) {
      self.footer.removeChild(self.footer.firstChild);
    }


  };
  // DESTROY GAME
  // self.destroyGameScreen = function() {
  //
  // };
  // DESTROY END
  // self.destroyEndScreen = function() {
  //
  // };

  // MAKE THE GAME WORK


  // ON PAGE LOAD!
  self.init = function() {
    self.createSplash();
    console.log('init');
  };

  // self.playButton.addEventListener('click', function() {
  //   console.log('clicked');
  // });


}
