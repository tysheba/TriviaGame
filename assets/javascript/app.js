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
var x = 0; //index for question
// Add function to display game questions
var displayQuestion = function () {
    var choices = gameQuestions[x].answers;
    var $questionDiv = $("#question");
    var triviaQuestion = "<h2> " + gameQuestions[x].question + "</h2>";
    var correctNum = parseInt(gameQuestions[x].correctAnswer);
    var $radioBtns = $("#radioBtns");
    $questionDiv.html(triviaQuestion);
    $radioBtns.html(" ");
    for (var i =0; i< choices.length; i++) {
        $radioBtns.append('<label> <input type="radio" name = "answerchoices" value = "' + choices[i] + ' " />' + choices[i] + '</label></br>');
        // $("#game").append($questionDiv);
        // $("#game").append($radioBtns);
    }
    

     console.log(correctAns);
    // var triviaAnswers = $('<input type="radio" name="choices" value = gameQuestions[i].answers />')   //add radio buttons
    
    // console.log("#game")
    // settimeout()
    
    
}
$(".btn").on("click", displayQuestion());
