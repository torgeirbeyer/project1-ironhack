'use strict';

function Whack(container, header, main, footer) {
  var self = this;
  self.container = container;
  self.header = header;
  self.main = main;
  self.footer = footer;
  //variables to be updated
  self.timer = 0;
  self.player1Score = 0;
  self.player2Score = 0;
  self.highScores = [];
  self.hackersArray = [
    'images/Torgeir.jpg',
    'images/Bryan.jpg',
    'images/Clara.jpg',
    'images/Constantinos.jpg',
    'images/Cristian.jpg',
    'images/Cristina.jpg',
    'images/Dafne.jpg',
    'images/David.jpg',
    'images/Desiree.jpg',
    'images/Dominik.jpg',
    'images/Eloi.jpg',
    'images/Elvin.jpg',
    'images/Felice.jpg',
    'images/Jean.jpg',
    'images/Juan.jpg',
    'images/Jordi.jpg',
    'images/Michal.jpg',
    'images/Sara.jpg',
    'images/Sarah.jpg',
    'images/Tiago.jpg'
  ];

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
    h1.classList.add('text');
    h1.innerText = 'whack_a_hack';
    self.header.appendChild(h1);
    self.gameTimer = 200.00;

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
    playButton.innerHTML = 'whack';
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
    footerText.classList.add('text');
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
    self.header.classList.add('header-game-screen');
    var timerDiv = document.createElement('div');
    timerDiv.classList.add('timer');
    self.header.appendChild(timerDiv);
    var timerSpan = document.createElement('span');
    timerSpan.setAttribute('id', 'countdown');
    timerSpan.classList.add('text');
    timerSpan.innerHTML = '--';
    timerDiv.appendChild(timerSpan);

    var scoreDiv = document.createElement('div');
    scoreDiv.classList.add('score');
    self.header.appendChild(scoreDiv);
    var scoreSpan = document.createElement('span');
    scoreSpan.classList.add('text');
    scoreSpan.setAttribute('id', 'updateScore');
    scoreSpan.innerHTML = '0';
    scoreDiv.appendChild(scoreSpan);

    // GAMESCREEN MAIN
    self.main.classList.add('main-game-screen');
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
    self.footer.classList.add('footer-game-screen');
    var messageDiv = document.createElement('div');
    messageDiv.setAttribute('id', 'displayMessage');
    footer.appendChild(messageDiv);
    var message = document.createElement('span');
    message.classList.add('footer-text');
    message.innerHTML = 'SHOW MESSAGE HERE';
    messageDiv.appendChild(message);
    self.startTimer();
    self.addRandomImage(self.hackersArray);
  };

  // CREATING THE END SCREEN
  self.createEndScreen = function() {
    // HEADER END SCREEN
    var gameOver = document.createElement('div');
    gameOver.classList.add('header-end-screen');
    self.header.appendChild(gameOver);
    var headerEnd = document.createElement('h1');
    headerEnd.innerHTML = 'time_out!';
    gameOver.appendChild(headerEnd);

    // MAIN END SCREEN
    var mainEndScreen = document.createElement('div');
    mainEndScreen.classList.add('show-score', 'text');
    self.main.appendChild(mainEndScreen);
    var finalScore = document.createElement('span');
    finalScore.innerHTML = 'your_score_' + self.player1Score;
    finalScore.classList.add('finalScore');
    mainEndScreen.appendChild(finalScore);

    // FOOTER END SCREEN
    var footerDiv = document.createElement('div');
    footerDiv.classList.add('reset');
    self.footer.appendChild(footerDiv);
    var playAgain = document.createElement('button');
    playAgain.classList.add('end-button');
    playAgain.innerHTML = 'whack_again?';
    footerDiv.appendChild(playAgain);
    // RESET TO SPLASH IF USER WANT TO PLAY AGAIN
    playAgain.addEventListener('click', self.destroyScreens);
    playAgain.addEventListener('click', self.createSplash);
  };

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


  // MAKE THE GAME WORK
  // self.startGame = function() {
  //
  // }


  // ADD RANDOMIMAGE TO DIV
  self.addRandomImage = function(array) {
    var clearRandom = setInterval(function() {
      if (self.gameTimer > 0) {
        // selecting the image
        var randomNumber = Math.floor(Math.random() * array.length);
        var randomImage = array[randomNumber];
        var randomNumberDiv = Math.floor((Math.random() * 9) + 1);
        var randomDiv = document.getElementById('num' + randomNumberDiv);
        console.log(randomDiv);
        var image = document.createElement('img');
        image.classList.add('show-image');
        image.setAttribute('src', randomImage);
        image.setAttribute('width', '100%');
        image.setAttribute('height', '100%');
        randomDiv.appendChild(image);
        var removeImage = setTimeout(function() {
          randomDiv.removeChild(image);
        }, 1000);


        // randomDiv.innerHTML = randomImage;
      } else {
        clearInterval(clearRandom);

      }

    }, 2000);

  };

  // TIMER
  self.startTimer = function() {
    var intervalId = setInterval(function() {
      self.gameTimer -= 0.01;
      document.getElementById('countdown').textContent = self.gameTimer.toFixed(2);
      if (self.gameTimer <= 0) {
        clearInterval(intervalId);
        self.destroyScreens();
        self.createEndScreen();
      }
    }, 10);

  };

  // ON PAGE LOAD!
  self.init = function() {
    self.createSplash();
    console.log('init');
  };

}
