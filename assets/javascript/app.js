// Add game questions to an object
var gameQuestions = [
    {
        question: "What are the names of the original members of Destiny's Child?",
        answers: ["Beyonce, Kelly Rowland, xxxx, and xxxx","Beyonce Kelly Rowland, xxx","Beyonce, Michelle Williams, xxx, xxx"
        ],
    
        correctAnswer: 0
    },
    {
        question: "What is the name of the first rap group to win a grammy award?",
        answers: ["Run D MC", "Salt-N Pepa", "Jazzy Jeff and the Fresh Prince" ],  
        correctAnswer: 2
    },
    {
        question: "Phife Dawg, Q-Tip, and Ali Shaheed Muhammad were members of what rap group?",
        answers: [ "De La Soul", "A Tribe Called Quest", "Digital Underground"],
        correctAnswer: 2
    },
    {
        question: "True or False. Lil Wayne, Juvenile and Mannie Fresh formed the 90's group the <em>Hot Boyz</em>.",
        answers: ["True","False"],
        correctAnswer: 1
    },
    {
        question: "Who is the best selling rap artist of all time?",
        answers: ["Eminem", "Drake", "Tupac Shakur"],
        correctAnswer: 0
    }
];

// Add function to display game questions
var displayQuestion = function () {
    for (var i=0; i< gameQuestions.length; i++) {
    var $questionDiv = $("<div>");
    var triviaQuestion = "<p> " + gameQuestions[i].question + "<p>";
    var correctNum = parseInt(gameQuestions[i].correctAnswer);
    var answer = gameQuestions[i].answers[correctNum];
    console.log(answer);
    $questionDiv.html(triviaQuestion);
    setTimeout(function() {
        alert("Time is up. The correct answer is " + answer)
    }, 10000);

    // var triviaAnswers = $('<input type="radio" name="choices" value = gameQuestions[i].answers />')   //add radio buttons
    $("#game").prepend($questionDiv);
    // console.log("#game")
    // settimeout()
    }
    
}
$(".btn").on("click", displayQuestion());
