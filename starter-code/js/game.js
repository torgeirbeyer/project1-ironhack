'use strict';

function Whack(container, header, main, footer) {
  var self = this;
  self.container = container;
  self.header = header;
  self.main = main;
  self.footer = footer;
  //variables to be updated
  self.gametimer = 200;
  self.removeClassTimer = 2000;
  self.addImageTimer = 2000;
  self.player1Score = 0;
  // self.player2Score = 0;
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

  self.score = null;
  self.message = "";


  // RESET VARIABLES
  self.resetVar = function() {
    self.gameTimer = 20.00;
    self.player1Score = 0;
    self.removeClassTimer = 2000;
    self.addImageTimer = 2000;
  };

  // CREATING THE SCREENS
  //create the first screen - SPLASH
  self.createSplash = function() {
    //HEADER
    //HEADER TEXT
    var h1 = document.createElement('h1');
    h1.classList.add('text');
    h1.innerText = 'whack_a_hack';
    self.header.appendChild(h1);
    self.resetVar();

    //MAIN
    //PLAY BUTTON
    var div = document.createElement('div');
    div.classList.add('main-container');
    self.main.appendChild(div);
    var playButton = document.createElement('button');
    playButton.classList.add('big-button');
    // playButton.type = 'button';
    playButton.innerHTML = 'whack';
    div.appendChild(playButton);

    //FOOTER
    //FOOTER TEXT
    var footerText = document.createElement('p');
    footerText.classList.add('text');
    footerText.innerText = 'how_to_play';
    self.footer.appendChild(footerText);

    // add background sound

    // USER INTERACTION
    playButton.addEventListener('click', self.createGameScreen);
    footerText.addEventListener('click', self.showRules);
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
    timerSpan.innerHTML = self.gameTimer;
    timerDiv.appendChild(timerSpan);

    var scoreDiv = document.createElement('div');
    scoreDiv.classList.add('score');
    self.header.appendChild(scoreDiv);
    self.score = document.createElement('span');
    self.score.classList.add('text');
    self.score.setAttribute('id', 'updateScore');
    self.score.innerHTML = self.player1Score;
    scoreDiv.appendChild(self.score);


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
    var allCells = document.querySelectorAll('.cell');
    for (var jx = 0; jx < allCells.length; jx++) {
      allCells[jx].addEventListener('click', self.checkClick);
    }

    // GAMESCREEN FOOTER
    self.footer.classList.add('footer-game-screen');
    var messageDiv = document.createElement('div');
    messageDiv.setAttribute('id', 'displayMessage');
    footer.appendChild(messageDiv);
    var message = document.createElement('span');
    message.classList.add('footer-text', 'text');
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

  // RULES SCREEN
  self.showRules = function() {
    self.destroyScreens();
    var rulesDiv = document.createElement('div');
    rulesDiv.classList.add('rules');
    self.main.appendChild(rulesDiv);
    var rule1 = document.createElement('p');
    rule1.classList.add('list', 'text');
    rule1.innerHTML = 'if(hit) ? +=4sec;';
    rulesDiv.appendChild(rule1);
    var rule2 = document.createElement('p');
    rule2.classList.add('list', 'text');
    rule2.innerHTML = 'if(miss) ? -=2sec;';
    rulesDiv.appendChild(rule2);
    var rule3 = document.createElement('p');
    rule3.classList.add('list', 'text');
    rule3.innerHTML = 'if(score > 10 || score > 20) ? speed++;';
    rulesDiv.appendChild(rule3);
    var close = document.createElement('p');
    close.classList.add('list', 'text');
    close.innerHTML = 'close';
    rulesDiv.appendChild(close);

    close.addEventListener('click', function() {
      self.destroyScreens();
      self.createSplash();
    });

  };


  // ADD RANDOMIMAGE TO DIV
  self.addRandomImage = function(array) {
    var clearRandom = setInterval(function() {
      if (self.gameTimer > 0) {
        // selecting the image
        var randomNumber = Math.floor(Math.random() * array.length);
        var randomImage = array[randomNumber];
        var randomNumberDiv = Math.floor((Math.random() * 9) + 1);
        var randomDiv = document.getElementById('num' + randomNumberDiv);
        var image = document.createElement('img');
        image.classList.add('show-image');
        image.setAttribute('src', randomImage);
        image.setAttribute('width', '100%');
        image.setAttribute('height', '100%');
        randomDiv.appendChild(image);
        var removeImage = setTimeout(function() {
          randomDiv.removeChild(image);
        }, self.removeClassTimer);
      } else {
        clearInterval(clearRandom);
      }
    }, self.addImageTimer);
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

  self.checkClick = function(e) {
    self.checkScore();
    if (e.target.classList.contains('show-image')) {
      self.player1Score++;
      self.updateScore();
      self.gameTimer += 4;
      e.target.style.display = "none";
      self.flashScreen();
    } else {
      self.gameTimer -= 2;
      self.flashTime();
    }

  };

  self.flashTime = function() {
    var blink = document.querySelector('#countdown');
    blink.classList.add('blink');
    setTimeout(function() {
      blink.classList.remove('blink');
    }, 500);
  };

  self.flashScreen = function() {
    self.container.classList.add('green-flash');
    setTimeout(function() {
      self.container.classList.remove('green-flash');
    }, 500);
  };

  self.checkScore = function() {
    if (self.player1Score > 20) {
      self.addImageTimer = 800;
      self.removeClassTimer = 250;
    } else if (self.player1Score > 10) {
      self.addImageTimer = 1000;
      self.removeClassTimer = 500;
    } else if (self.player1Score > 5) {
      self.addImageTimer = 1500;
      self.removeClassTimer = 700;
    }
    console.log(self.addImageTimer, self.removeClassTimer);
  };

  // reset variables to start


  // update score in GAMESCREEN
  self.updateScore = function() {
    self.score.innerHTML = self.player1Score;
  };
  // ON PAGE LOAD!
  self.init = function() {
    self.createSplash();
  };

}
