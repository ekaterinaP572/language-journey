
const params = new URLSearchParams(window.location.search);
const quizName = params.get("quiz");
const selectedQuiz = quizzes[quizName];
const titleElement = document.getElementById("quiz-title");
const quizButton = document.getElementById("quiz-button");

const quizImage = document.getElementById("question-image");
const questionImageContainer = document.getElementById("question-image-container");

const language = sessionStorage.getItem("language");
const type = sessionStorage.getItem("type");




const questionElement = document.getElementById("question-text");
titleElement.innerText = selectedQuiz.title;

let currentQuestionIndex = 0;
let score = 0;
let testFinished = false;

const answerContainer = document.getElementById("answer-container");
const feedBack = document.getElementById("feedback");
const quizzProgress = document.getElementById("quiz-progress");
const nextButton = document.getElementById("next-button");
const repeatButton = document.getElementById("repeat-button");



showQuestion();

activateNextButton();
repeatTestButton();

function showQuestion(){
  const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.text;
  quizzProgress.innerText = selectedQuiz.progress + (currentQuestionIndex+1) 
                            + selectedQuiz.progressOf + selectedQuiz.questions.length;
  answerContainer.innerHTML = "";
  feedBack.innerText = "";
  nextButton.innerText = "Next";
  testFinished = false;
  questionElement.classList.add("question-text");
  if(currentQuestion.image){
    questionImageContainer.classList.remove("hidden");
    quizImage.src = currentQuestion.image;
  }else{
    questionImageContainer.classList.add("hidden");

  }

  nextButton.classList.remove("hidden");
  repeatButton.classList.add("hidden");
  feedBack.classList.remove("question-text");
  quizButton.href = `quiz-list.html?language=${language}&type=${type}`;

  createAnswerButtons(currentQuestion);


}

function createAnswerButtons(question){

  for (const answer of question.answers){
  const answerButton = document.createElement("button");
  answerButton.classList.add("answer-card");

  
  answerButton.addEventListener("click", function () {
     

    if(answer==question.correctAnswer){
      answerButton.classList.add("correct");
      score++;
      
    } else {
      answerButton.classList.add("wrong");
      

    }
    for(const button of answerContainer.children){
      if(button.innerText==question.correctAnswer){
        button.classList.add("correct");


      }
    }
  for(const button of answerContainer.children){
      button.disabled = true;
    }

  });
  answerButton.innerText = answer;
  answerContainer.appendChild(answerButton);

}


}

function activateNextButton(){
   
 

  nextButton.addEventListener("click", function (){
   
if(currentQuestionIndex < selectedQuiz.questions.length - 1){

    currentQuestionIndex++;
    showQuestion();
    if(currentQuestionIndex==selectedQuiz.questions.length - 1 ) {
   nextButton.innerText = "End the quiz"; }

  }else{
  questionElement.innerText = "";
  quizzProgress.innerText = "";
  answerContainer.innerHTML = "";
  titleElement.classList.remove("question-text");

  feedBack.innerText = "Your result is " + score;
  feedBack.classList.add("question-text");
  testFinished = true;
  nextButton.classList.add("hidden");
  repeatButton.classList.remove("hidden");
   questionElement.classList.remove("question-text");

  
}
  

})
 
  }

  function  repeatTestButton(){


    repeatButton.addEventListener("click", function(){
      if(testFinished){

    currentQuestionIndex = 0;
    score = 0;
    showQuestion(); }
  })

  }
  






