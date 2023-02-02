/*Jesiah*/
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = doucment.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0
let availableQuestions = [];

const MaxQuestions = 10;
const CorrectBonus = 10;
//Start game function
startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [];
    console.log(availableQuestions);
    getNewQuestion();

}
getNewQuestion = () =>{
    /*if(availableQuestions.length == 0 || questionCounter >= MaxQuestions){
        return window.location.assign("/leaderboards.html")
    }*/
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MaxQuestions;
    /*Show questions randomly*/
    Math.floor(Math.random() * availableQuestions.length);
    getQuestions = availableQuestions [questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    /*Adding new contents into the array*/ 
    availableQuestions.splice(questionIndex,1);
    console.log(availableQuestions);
    acceptingAnswers = true;

    /*Get the choices*/
    choices.forEach(choice => {
        choice.addEventListener("click", e =>{
            if(!acceptingAnswers)return;  
            acceptingAnswers = false  
            const selectedChoice = e.target;
            /*Get the dataset number*/ 
            const selectedAnswer = selectedChoice.dataset['number'];

            const classToApply = selectedAnswer = currentQuestion.answer ? 'correct': 'incorrect';
            getNewQuestion();

            if(classToApply == 'correct'){
                incrementScore(CorrectBonus)
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();

            },1000)
        });
        
    });
    /*Increase score when user answers question correctly */
    incrementScore = num =>{
        score += num;
        scoreText.innerText = score;
    }
}
startGame();