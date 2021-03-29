var questions = [
  {
    title: "Which of the following is the correct way to name an HTML file?",
    choices: ['html.index', 'index', 'index.html', 'none of the above'],
    answer: 'index.html'
  },
  {
    title: "Where should CSS code be located in the index.html?",
    choices: ['head', 'nav', 'body', 'footer'],
    answer: 'head'
  },
  {
    title: "Which element should be used to create a link in HTML?",
    choices: ['a', 'link', 'href', 'all of the above'],
    answer: 'all of the above'
  },
  {
    title: "How can a 'click' function be applied to a button in Javascript?",
    choices: ['.on()', '.listenToThis()', '.clickhere()', '.addEventListener()'],
    answer: '.addEventListener()'
  },
  {
    title: "Which browser is superior and one example of why?",
    choices: ['Chrome, DevTools', 'Safari, Apple is always superior', 'Explorer, older but wiser', 'Firefox, the fox is super cute'],
    answer: 'Chrome, DevTools'
  },
  {
    title: "Where can you find things saved in an application's local storage?",
    choices: ['VSCode', 'StackOverflow', 'console', 'memory'],
    answer: 'console'
  },
  {
    title: "JavaScript is an axample of which of the following?",
    choices: ['jQuery', 'Web API', 'stylesheet', 'none of the above'],
    answer: 'Web API'
  },
  {
    title: "What is the purpose of 'git pull'?",
    choices: ['to create a repo', 'to email your code to your friends', 'to stretch a webpage', 'to update the local repo'],
    answer: 'to update the local repo'
  },
  {
    title: "How would CSS correctly refer to id='hello'?",
    choices: ['#hello', '~hello', '.hello', '[hello]'],
    answer: '#hello'
  },
  {
    title: "What is DOM short for?",
    choices: ['Dominant Code', 'Document Object Model', 'Double Observe your Media', 'Deconstruct Overt Messages'],
    answer: 'Document Object Model'
  }
];

var currentQuestion = 0;
var quizOver = false;
var timerInterval;
var secondsLeft = 60;
var timeEl = document.getElementById('timer');
var timer = document.getElementById('wholetimer')
var beginBtn = document.getElementById('begin');
var nextBtn = document.getElementById('next');
var firstPage = document.getElementById('firstpage');
var questionPage = document.getElementById('questionpage');
var donePage = document.getElementById('donepage');

var questionTitle = document.getElementById('questiontitle');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');

var giveAnswer = document.getElementById('giveAnswer');
var selected = document.getElementById('choices');

function takeQuiz() {
  timer.classList.remove("hide");
  firstPage.classList.add("hide");
  questionPage.classList.remove("hide");

  showQuestion();
  setTime();
}

function showQuestion() {
  //attach the title to the h1 and the choices into the buttons
  for (let index = 0; index < questions.length; index++) {
    var nextQuestion = currentQuestion[index];
    questionTitle.textContent = questions[currentQuestion].title;
    choice1.textContent = questions[currentQuestion].choices[0];
    choice2.textContent = questions[currentQuestion].choices[1];
    choice3.textContent = questions[currentQuestion].choices[2];
    choice4.textContent = questions[currentQuestion].choices[3];

    questionPage = nextQuestion

    nextBtn.onclick = function () {
      index++
    }
  };
  
  function checkAnswer() {
    selected.onclick = function (event) {
      var userChoice = event.target
      var actualAnswer = questions[currentQuestion].answer[0];
      if (userChoice === actualAnswer) {
        giveAnswer.textContent = "Correct!";
        nextBtn.classList.remove("hide");
      } else {
        giveAnswer.textContent = "Wrong :(";
        nextBtn.classList.remove("hide");
      };
    };
  }
  
  checkAnswer();
}


function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      //stop quiz function
    }

  }, 1000);
}


beginBtn.addEventListener('click', takeQuiz);

