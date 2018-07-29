// Add game questions to an object
var gameQuestions = [
    {
        question: "What are the names of the original members of Destiny's Child?",
        answers: {
            a: "Beyonce, Kelly Rowland, xxxx, and xxxx",
            b: "Beyonce Kelly Rowland, xxx",
            c: "Beyonce, Michelle Williams, xxx, xxx"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of the first rap group to win a grammy award?",
        answers: {
            a: "Run D MC",
            b: "Salt-N Pepa",
            c: "Jazzy Jeff and the Fresh Prince"
        },
        correctAnswer: "c"
    },
    {
        question: "Phife Dawg, Q-Tip, and Ali Shaheed Muhammad were members of what rap group?",
        answers: {
            a: "De La Soul",
            b: "A Tribe Called Quest",
            c: "Digital Underground"
        },
        correctAnswer: "b"
    },
    {
        question: "True or False. Lil Wayne, Juvenile and Mannie Fresh formed the 90's group the <em>Hot Boyz</em>.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "b"
    },
    {
        question: "Who is the best selling rap artist of all time?",
        answers: {
            a: "Eminem",
            b: "Drake",
            c: "Tupac Shakur"
        },
        correctAnswer: "a"
    }
];

// Add function to display game questions
var displayQuestion = function () {
    for (var i=0; i< gameQuestions.length; i++) {
    var triviaQuestion = "<label> " + gameQuestions[i].question + "</label>";
    $("#game").text("<p><h2>Let's Play The Game</h2></p>");
    // $("#game").html(triviaQuestion)  //add element for form question
    // var triviaAnswers = $("<form-control>")    //add radio buttons
    // $("#game").append(triviaQuestion, triviaAnswers);
    console.log(triviaQuestion)
    // console.log("#game")
    // settimeout()
    }
    
}
$(".btn").on("click", displayQuestion());
