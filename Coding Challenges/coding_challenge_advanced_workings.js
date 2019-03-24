(function() {
  var correctAnswerCount = 0;

  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    console.log('\n');
    for (i = 0; i < this.answers.length; i++) {
      console.log([i] + ') ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(answerGiven) {
    if (this.correctAnswer === answerGiven) {
      correctAnswerCount++;

      console.log('\n');
      console.log('That is indeed the correct answer good job buddy :).');
      console.log('Your total score is now: ' + correctAnswerCount);
      console.log('\n');

      nextQuestion(questions);
    } else {
      console.log('\n');
      console.log('Damn dude that is incorrect, Your final score is: ' + correctAnswerCount);
      console.log('\n');
    }
  }

  var questionOne = new Question('What is life?',
    [
      'Baby don\'t hurt me',
      'Don\'t hurt me',
      'No more'
    ], 0);
  var questionTwo = new Question('Are memes funny',
    [
      'Yes',
      'No',
      'Sometimes'
    ], 0);
  var questionThree = new Question('If life gives you lemons',
    [
      'You say thanks life for these lemons',
      'You make a lemonade stand',
      'You make lemonade'
    ], 2);

  var questions = [questionOne, questionTwo, questionThree];
  var answerGiven = '';

  function nextQuestion(questions) {
    var randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    randomQuestion.displayQuestion();

    var answerGiven = prompt('What is the correct answer?');

    if (answerGiven === 'Exit' || answerGiven === 'exit') {
      console.log('\n');
      console.log('You have exited the game. Thanks for playing.');
    } else {
      randomQuestion.checkAnswer(parseInt(answerGiven));
    }
  }
  nextQuestion(questions);
})();
