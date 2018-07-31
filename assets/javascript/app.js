// Add game questions to an object
var gameQuestions = [
    {
        question: "What are the names of the original members of Destiny's Child?",
        answers: ["Beyonce, Kelly Rowland, LeToya Luckett, and LaTavia Robertson","Beyonce, Kelly Rowland, and Michelle Williams","Beyonce, Michelle Williams, LaToya Luckett, and Kelly Rowland"
        ],
    
        correctAnswer: 0,
        image: "assets/images/1destinyschild.jpg"
    },
    {
        question: "What is the name of the first rap group to win a grammy award?",
        answers: ["Run D MC", "Salt-N Pepa", "Jazzy Jeff and the Fresh Prince" ],  
        correctAnswer: 2,
        image: "assets/images/2JazzyJeffnFreshPrince.jpg"
    },
    {
        question: "Phife Dawg, Q-Tip, and Ali Shaheed Muhammad were members of what rap group?",
        answers: [ "De La Soul", "A Tribe Called Quest", "Digital Underground"],
        correctAnswer: 2, 
        image: "assets/images/3tribeCalledQuest.png"
    },
    {
        question: "True or False. Lil Wayne, Juvenile and Mannie Fresh formed the 90's group the <em>Hot Boyz</em>.",
        answers: ["True","False, the Hot Boyz consisted of Lil Wayne, Juvenile, and BG"],
        correctAnswer: 1,
        image: "assets/images/4HotBoyz.jpg"
    },
    {
        question: "Who is the best selling rap artist of all time?",
        answers: ["Eminem", "Drake", "Tupac Shakur"],
        correctAnswer: 0,
        image: "assets/images/5Eminem.jpg"
    }
];
var x = 0; //index for question
var correctNum = parseInt(gameQuestions[x].correctAnswer);
var $questionDiv = $("#question");
var $radioBtns = $("#radioBtns");
var wrongAnswer = 0;
timesUp = function () {
    alert("Times up! the correct answer is " + gameQuestions[x].answers[correctNum]);
    $questionDiv.empty();
    $radioBtns.empty();
    x++;
    wrongAnswer++;
    displayQuestion();

}
// var timer = setTimeout(timesUp, 15 * 1000);
// Add function to display game questions
var displayQuestion = function () {
    var choices = gameQuestions[x].answers;
    var triviaQuestion = "<h2> " + gameQuestions[x].question + "</h2>";
    $questionDiv.html(triviaQuestion);
    $radioBtns.html(" ");
    for (var i =0; i< choices.length; i++) {
        $radioBtns.append('<label> <input type="radio" name = "answerchoices" value = "' + i + '" /> ' + choices[i] + ' </label></br>');
        // $("#game").append($questionDiv);
        // $("#game").append($radioBtns);
    }

    setTimeout(timesUp, 5 * 1000);

     console.log(correctNum);
     console.log(gameQuestions[x].answers[correctNum]);
       
}
$(".btn").on("click", displayQuestion());
